import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
import { getPlaylist, getVideos } from './api/youtube/lib.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = 3000;

app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

app.get('/api/youtube/playlist', async (req, res) => {
  const result = await getPlaylist({
    playlistId: req.query.playlistId,
    maxResults: req.query.maxResults,
  });
  return res.status(result.status).json(result.data);
});

app.get('/api/youtube/videos', async (req, res) => {
  const result = await getVideos({
    videoIds: req.query.videoIds,
  });
  return res.status(result.status).json(result.data);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
