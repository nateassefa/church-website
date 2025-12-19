import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
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

  try {
    const { playlistId, maxResults } = request.query;
    // Try both with and without VITE_ prefix for Vercel compatibility
    const apiKey = process.env.VITE_YOUTUBE_API_KEY || process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      console.error('YouTube API key not configured');
      return response.status(500).json({ 
        error: 'YouTube API key not configured',
        details: 'Please set VITE_YOUTUBE_API_KEY or YOUTUBE_API_KEY in your Vercel environment variables'
      });
    }

    if (!playlistId || typeof playlistId !== 'string') {
      return response.status(400).json({ 
        error: 'Playlist ID is required' 
      });
    }

    // Parse maxResults - YouTube API accepts both string and number
    const maxResultsNum = maxResults 
      ? parseInt(String(maxResults), 10) || 9
      : 9;
    
    // Ensure it's within valid range (1-50)
    const finalMaxResults = Math.max(1, Math.min(50, maxResultsNum));

    const youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${finalMaxResults}&order=date&key=${apiKey}`;
    
    const youtubeResponse = await fetch(youtubeUrl);
    
    if (!youtubeResponse.ok) {
      const errorData = await youtubeResponse.json().catch(() => ({ error: 'Unknown error' }));
      console.error('YouTube API error:', youtubeResponse.status, errorData);
      return response.status(youtubeResponse.status).json({
        error: 'YouTube API error',
        status: youtubeResponse.status,
        details: errorData
      });
    }

    const data = await youtubeResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    return response.status(500).json({ 
      error: 'Failed to fetch playlist data',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
  }
}

