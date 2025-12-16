// Simple proxy server for local development
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env file
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = 3000;

app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Proxy endpoint for YouTube API
app.get('/api/youtube/playlist', async (req, res) => {
  const { playlistId, maxResults = 9 } = req.query;
  const apiKey = process.env.VITE_YOUTUBE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ 
      error: 'YouTube API key not configured' 
    });
  }

  if (!playlistId || typeof playlistId !== 'string') {
    return res.status(400).json({ 
      error: 'Playlist ID is required' 
    });
  }

  try {
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${maxResults}&order=date&key=${apiKey}`;
    
    const youtubeResponse = await fetch(youtubeUrl, {
      headers: {
        'Referer': 'http://localhost:3000'
      }
    });
    const data = await youtubeResponse.json();

    if (!youtubeResponse.ok) {
      return res.status(youtubeResponse.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch playlist data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Endpoint to fetch video details by IDs
app.get('/api/youtube/videos', async (req, res) => {
  const { videoIds } = req.query;
  const apiKey = process.env.VITE_YOUTUBE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ 
      error: 'YouTube API key not configured' 
    });
  }

  if (!videoIds || typeof videoIds !== 'string') {
    return res.status(400).json({ 
      error: 'Video IDs are required' 
    });
  }

  try {
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=${apiKey}`;
    
    const youtubeResponse = await fetch(youtubeUrl, {
      headers: {
        'Referer': 'http://localhost:3000'
      }
    });
    const data = await youtubeResponse.json();

    if (!youtubeResponse.ok) {
      return res.status(youtubeResponse.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch video data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

