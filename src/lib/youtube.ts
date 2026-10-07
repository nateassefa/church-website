export const ENGLISH_PLAYLIST_ID =
  import.meta.env.VITE_YOUTUBE_ENGLISH_PLAYLIST_ID || 'PL5CuL39GGp2KbOxQ4TcdDOPfprKvSODYW';

export const AMHARIC_PLAYLIST_ID =
  import.meta.env.VITE_YOUTUBE_AMHARIC_PLAYLIST_ID || 'PL5CuL39GGp2Lah6z9GM6RNX7YC8Srziho';

export async function fetchYoutubePlaylist(playlistId: string, maxResults = 9) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(
      `/api/youtube/playlist?playlistId=${encodeURIComponent(playlistId)}&maxResults=${maxResults}`,
      {
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      }
    );

    if (!response.ok) return null;
    const data = await response.json();
    if (!Array.isArray(data?.items)) return null;
    return data;
  } catch (error) {
    console.error('YouTube playlist fetch failed:', error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}
