const API_REFERER = 'https://livinghopegenchurch.org/';

export function getYoutubeApiKey() {
  const env = process.env;
  const exactNames = [
    'YOUTUBE_API_KEY',
    'VITE_YOUTUBE_API_KEY',
    'Youtube_API_Key',
  ];

  for (const name of exactNames) {
    if (env[name]) return env[name];
  }

  for (const [name, value] of Object.entries(env)) {
    if (!value) continue;
    const normalized = name.replace(/_/g, '').toLowerCase();
    if (normalized === 'youtubeapikey' || normalized === 'viteyoutubeapikey') {
      return value;
    }
  }

  return '';
}

function isPublicPlaylistItem(item) {
  const title = item?.snippet?.title || '';
  const privacy = item?.status?.privacyStatus;
  if (privacy === 'private') return false;
  if (title === 'Deleted video' || title === 'Private video') return false;
  return Boolean(item?.snippet?.resourceId?.videoId);
}

async function youtubeGet(url) {
  const response = await fetch(url, {
    headers: {
      Referer: API_REFERER,
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return { ok: response.ok, status: response.status, data };
}

function decodeXml(value = '') {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function fetchPlaylistRss(playlistId, maxResults) {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(playlistId)}`;
  const response = await fetch(rssUrl, {
    headers: { Accept: 'application/atom+xml, application/xml, text/xml' },
  });

  if (!response.ok) {
    throw new Error(`YouTube RSS feed failed (${response.status})`);
  }

  const xml = await response.text();
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

  const items = entries.slice(0, maxResults).map((match, index) => {
    const block = match[1];
    const videoId = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] || '';
    const title = decodeXml(block.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '');
    const publishedAt = block.match(/<published>([^<]+)<\/published>/)?.[1] || '';
    const thumbnail =
      block.match(/<media:thumbnail[^>]*url="([^"]+)"/)?.[1] ||
      (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '');

    return {
      id: `${playlistId}-${videoId || index}`,
      snippet: {
        title,
        publishedAt,
        resourceId: { videoId },
        thumbnails: {
          high: { url: thumbnail },
          medium: { url: thumbnail },
        },
      },
    };
  }).filter((item) => item.snippet.resourceId.videoId);

  return { items };
}

export async function getPlaylist({ playlistId, maxResults = 9 }) {
  if (!playlistId || typeof playlistId !== 'string') {
    return {
      status: 400,
      data: { error: 'Playlist ID is required' },
    };
  }

  const max = Math.min(Math.max(parseInt(String(maxResults), 10) || 9, 1), 50);
  const apiKey = getYoutubeApiKey();

  if (apiKey) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId=${encodeURIComponent(playlistId)}&maxResults=${max}&key=${apiKey}`;
      const { ok, data } = await youtubeGet(url);
      if (ok && Array.isArray(data.items)) {
        return {
          status: 200,
          data: {
            ...data,
            items: data.items.filter(isPublicPlaylistItem),
          },
        };
      }
      console.warn('YouTube playlist API failed, using RSS fallback:', data?.error?.message || data?.error);
    } catch (error) {
      console.warn('YouTube playlist API error, using RSS fallback:', error);
    }
  }

  try {
    const data = await fetchPlaylistRss(playlistId, max);
    return { status: 200, data };
  } catch (error) {
    return {
      status: 500,
      data: {
        error: 'Failed to fetch playlist data',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
    };
  }
}

export async function getVideos({ videoIds }) {
  if (!videoIds || typeof videoIds !== 'string') {
    return {
      status: 400,
      data: { error: 'Video IDs are required' },
    };
  }

  const apiKey = getYoutubeApiKey();
  if (!apiKey) {
    return { status: 200, data: { items: [] } };
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${encodeURIComponent(videoIds)}&key=${apiKey}`;
    const { ok, status, data } = await youtubeGet(url);
    if (ok) return { status: 200, data };
    return { status, data };
  } catch (error) {
    return {
      status: 500,
      data: {
        error: 'Failed to fetch video data',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
    };
  }
}
