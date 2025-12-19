// JavaScript version for better compatibility
export default async function handler(request, response) {
  try {
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
    
    // Log for debugging
    console.log('Request received:', { playlistId, maxResults, hasApiKey: !!process.env.VITE_YOUTUBE_API_KEY });
    
    const apiKey = process.env.VITE_YOUTUBE_API_KEY;

    if (!apiKey) {
      console.error('API key missing');
      return response.status(500).json({ 
        error: 'YouTube API key not configured',
        debug: {
          envKeys: Object.keys(process.env).filter(k => k.includes('YOUTUBE') || k.includes('API'))
        }
      });
    }

  if (!playlistId || typeof playlistId !== 'string') {
    return response.status(400).json({ 
      error: 'Playlist ID is required' 
    });
  }

  // Parse maxResults as number, but YouTube API accepts string too
  const maxResultsNum = parseInt(String(maxResults), 10) || 9;

  try {
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${maxResultsNum}&order=date&key=${apiKey}`;
    
    const youtubeResponse = await fetch(youtubeUrl);
    const data = await youtubeResponse.json();

    if (!youtubeResponse.ok) {
      return response.status(youtubeResponse.status).json(data);
    }

    return response.status(200).json(data);
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error('Full error:', { message: errorMessage, stack: errorStack });
    return response.status(500).json({ 
      error: 'Failed to fetch playlist data',
      message: errorMessage,
      stack: errorStack
    });
  } catch (outerError) {
    // Catch any errors in the handler itself
    console.error('Handler error:', outerError);
    return response.status(500).json({
      error: 'Internal server error',
      message: outerError instanceof Error ? outerError.message : 'Unknown error',
      stack: outerError instanceof Error ? outerError.stack : undefined
    });
  }
}

