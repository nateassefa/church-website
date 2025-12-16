// JavaScript version for better compatibility
export default async function handler(request, response) {
  // Enable CORS
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  const { playlistId, maxResults = 9 } = request.query;
  const apiKey = process.env.VITE_YOUTUBE_API_KEY;

  if (!apiKey) {
    return response.status(500).json({ 
      error: 'YouTube API key not configured' 
    });
  }

  if (!playlistId || typeof playlistId !== 'string') {
    return response.status(400).json({ 
      error: 'Playlist ID is required' 
    });
  }

  try {
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${maxResults}&order=date&key=${apiKey}`;
    
    const youtubeResponse = await fetch(youtubeUrl);
    const data = await youtubeResponse.json();

    if (!youtubeResponse.ok) {
      return response.status(youtubeResponse.status).json(data);
    }

    return response.status(200).json(data);
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    return response.status(500).json({ 
      error: 'Failed to fetch playlist data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

