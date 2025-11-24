import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface SermonVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  videoId: string;
  speaker?: string;
}

interface SermonGridProps {
  playlistId?: string;
  title?: string;
  maxResults?: number;
  manualVideos?: Array<{
    videoId: string;
    title: string;
    speaker: string;
    date: string; // Format: "November 12th 2025"
  }>;
}

// Helper function to get YouTube thumbnail from video ID
const getYouTubeThumbnail = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Helper function to fetch video data from YouTube oEmbed (no API key needed)
const fetchVideoData = async (videoId: string) => {
  try {
    const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    if (!response.ok) return null;
    const data = await response.json();
    return {
      title: data.title,
      thumbnail: getYouTubeThumbnail(videoId),
      author: data.author_name
    };
  } catch (err) {
    console.error(`Error fetching video ${videoId}:`, err);
    return null;
  }
};

const SermonGrid = ({ playlistId = "PL5CuL39GGp2Lah6z9GM6RNX7YC8Srziho", title = "WATCH RECENT SERMONS", maxResults = 9 }: SermonGridProps) => {
  const [videos, setVideos] = useState<SermonVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!playlistId) {
          setError('Playlist ID is required');
          setVideos([]);
          setLoading(false);
          return;
        }

        // Use API proxy route (works in both dev and production)
        try {
          const isProduction = import.meta.env.PROD;
          // In production, use the Vercel API route
          // In development, use the local proxy server on port 3000
          const apiUrl = isProduction 
            ? `/api/youtube/playlist?playlistId=${playlistId}&maxResults=${maxResults}`
            : `http://localhost:3000/api/youtube/playlist?playlistId=${playlistId}&maxResults=${maxResults}`;
          
          console.log('Fetching from:', apiUrl);
          const response = await fetch(apiUrl, {
            mode: 'cors',
            headers: {
              'Accept': 'application/json',
            }
          }).catch((err) => {
            console.error('Fetch error:', err);
            // If CORS fails, try the production route as fallback
            if (!isProduction) {
              console.log('Trying production route as fallback...');
              return fetch(`/api/youtube/playlist?playlistId=${playlistId}&maxResults=${maxResults}`).catch(() => null);
            }
            return null;
          });
          
          if (!response || !response.ok) {
            console.warn('API response not OK:', response?.status, response?.statusText);
            // If API fails, show playlist embed instead
            setError('no-api-key');
            setVideos([]);
            setLoading(false);
            return;
          }
          
          const data = await response.json();
          console.log('API data received:', data);
          
          if (data.items && data.items.length > 0) {
            const formattedVideos: SermonVideo[] = data.items.map((item: any) => {
              const title = item.snippet.title;
              
              return {
                id: item.id,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || getYouTubeThumbnail(item.snippet.resourceId.videoId),
                publishedAt: item.snippet.publishedAt,
                videoId: item.snippet.resourceId.videoId,
                speaker: extractSpeaker(title)
              };
            });
            
            setVideos(formattedVideos);
            setLoading(false);
            return;
          } else {
            // No videos found, show playlist embed
            setError('no-api-key');
            setVideos([]);
            setLoading(false);
            return;
          }
        } catch (apiErr) {
          // On any error, show playlist embed fallback
          console.warn('API fetch failed, showing playlist embed:', apiErr);
          setError('no-api-key');
          setVideos([]);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.error('Error fetching sermons:', err);
        setError(err instanceof Error ? err.message : 'Failed to load sermons');
        setVideos([]);
        setLoading(false);
      }
    };

    fetchSermons();
  }, [playlistId]);

  const formatDate = (dateString: string) => {
    // If it's already formatted (from manual videos), return as-is
    if (dateString.includes('th') || dateString.includes('st') || dateString.includes('nd') || dateString.includes('rd')) {
      return dateString;
    }
    
    // Otherwise, format from ISO date string
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    // Add ordinal suffix
    const suffix = day === 1 || day === 21 || day === 31 ? 'st' :
                   day === 2 || day === 22 ? 'nd' :
                   day === 3 || day === 23 ? 'rd' : 'th';
    
    return `${month} ${day}${suffix} ${year}`;
  };

  const extractSpeaker = (title: string): string => {
    // Try to extract speaker name from title
    // Look for patterns like "Pastor John Morgan" or "Dr. Anna Morgan" or "| Pastor John Morgan"
    const patterns = [
      /\|\s*(?:Pastor|Dr\.?)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/, // "| Pastor John Morgan"
      /(?:Pastor|Dr\.?)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/, // "Pastor John Morgan"
      /by\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i, // "by John Morgan"
    ];
    
    for (const pattern of patterns) {
      const match = title.match(pattern);
      if (match) {
        // Return the full match including "Pastor" or "Dr."
        return match[0].replace(/^\|\s*/, ''); // Remove leading "| " if present
      }
    }
    
    return 'Speaker';
  };

  if (loading) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-600">Loading sermons...</p>
      </div>
    );
  }

  if (error === 'no-api-key' && videos.length === 0) {
    // Fallback: Show YouTube playlist embed if API is not available
    return (
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center uppercase tracking-tight">
          {title}
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
              title="Sermon Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4">
            <a 
              href={`https://www.youtube.com/playlist?list=${playlistId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#244363] hover:underline"
            >
              View full playlist on YouTube
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (error && videos.length === 0 && error !== 'no-api-key') {
    return (
      <div className="py-16 text-center">
        <p className="text-red-600">Unable to load sermons. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center uppercase tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Play overlay - white circle with blue play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 text-[#244363] ml-1" fill="#244363" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-3 min-h-[4rem]">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1 font-medium">
                  {extractSpeaker(video.title)}
                </p>
                <p className="text-sm text-gray-500">
                  {formatDate(video.publishedAt)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SermonGrid;

