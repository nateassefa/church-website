import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { getPlaylist, getVideos } from "./api/youtube/lib.js";

function youtubeApiPlugin(): Plugin {
  return {
    name: "youtube-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          const url = new URL(req.url || "", "http://localhost");
          if (url.pathname === "/api/youtube/playlist") {
            const result = await getPlaylist({
              playlistId: url.searchParams.get("playlistId"),
              maxResults: url.searchParams.get("maxResults") || 9,
            });
            res.statusCode = result.status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result.data));
            return;
          }
          if (url.pathname === "/api/youtube/videos") {
            const result = await getVideos({
              videoIds: url.searchParams.get("videoIds"),
            });
            res.statusCode = result.status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result.data));
            return;
          }
        } catch (error) {
          console.error("YouTube API middleware error:", error);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Failed to fetch YouTube data" }));
          return;
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return {
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    youtubeApiPlugin(),
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning threshold to 1000KB
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
          ],
          'animation-vendor': ['framer-motion', 'lottie-react'],
          'chart-vendor': ['recharts'],
        },
      },
    },
  },
};
});
