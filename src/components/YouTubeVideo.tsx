import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, AlertCircle } from "lucide-react";

interface YouTubeVideo {
  resourceId: {
    videoId: string;
  };
  title: string;
  publishedAt: string;
  thumbnails: {
    medium: {
      url: string;
    };
  };
}

const YouTubeVideo = () => {
  // For now, using a placeholder video ID
  // TODO: Replace with actual YouTube API integration
  const videoId = "dQw4w9WgXcQ"; // Placeholder - replace with actual church video ID
  const videoTitle = "Last Sunday's Service";
  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div variants={containerVariants}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#4c3219]">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-[#4c3219] rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#4c3219] mb-2">Watch Last Sunday's Service</h3>
            <div className="mb-4">
              <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg">
                <span className="text-gray-500 text-xl">[YouTube Video Placeholder]</span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">
                {videoTitle}
              </p>
            </div>
          </div>
          <Button className="w-full bg-[#4c3219] hover:bg-[#4c3219]/90 text-white">
            Watch Full Service →
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default YouTubeVideo; 