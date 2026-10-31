import { useState, useEffect } from 'react';
import { Play } from "lucide-react";
import { AMHARIC_PLAYLIST_ID, fetchYoutubePlaylist } from '@/lib/youtube';

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

const SermonGrid = ({ playlistId = AMHARIC_PLAYLIST_ID, title = "WATCH RECENT SERMONS", maxResults = 9 }: SermonGridProps) => {
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

        try {
          const data = await fetchYoutubePlaylist(playlistId, maxResults);
          
          if (!data) {
            setError('no-api-key');
            setVideos([]);
            setLoading(false);
            return;
          }
          
          if (data.items && data.items.length > 0) {
            const formattedVideos: SermonVideo[] = data.items.map((item: any) => {
              const videoId = item.snippet.resourceId.videoId;
              return {
                id: item.id,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || getYouTubeThumbnail(videoId),
                publishedAt: item.snippet.publishedAt,
                videoId: videoId,
              };
            });
            setVideos(formattedVideos);
            setLoading(false);
            return;
          } else {
            // No videos found
            setError('No videos found');
            setVideos([]);
            setLoading(false);
            return;
          }
        } catch (apiErr) {
          // On any error, try to show playlist embed fallback
          console.warn('API fetch failed:', apiErr);
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
  }, [playlistId, maxResults]);

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
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center uppercase tracking-tight">
          {title}
        </h2>
        <div className="py-16 text-center">
          <p className="text-red-600">Unable to load sermons. Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center uppercase tracking-tight">
        {title}
      </h2>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${videos.length <= 2 ? 'max-w-5xl mx-auto' : 'lg:grid-cols-3'}`}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="group cursor-pointer"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
          >
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  decoding="sync"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 text-[#244363] ml-1" fill="#244363" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SermonGrid;


