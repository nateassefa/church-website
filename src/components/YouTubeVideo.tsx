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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Video 1 */}
      <div className="flex flex-col items-center">
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/T8c-ecb5lrg?si=bxuJgOsqPADXASmV"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <a href="https://youtu.be/T8c-ecb5lrg?si=bxuJgOsqPADXASmV" target="_blank" rel="noopener noreferrer" className="text-[#244363] underline text-sm">https://youtu.be/T8c-ecb5lrg?si=bxuJgOsqPADXASmV</a>
      </div>
      {/* Video 2 */}
      <div className="flex flex-col items-center">
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/F9F30SWcDks?si=0QWY4u5hhVqsgKrg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <a href="https://youtu.be/F9F30SWcDks?si=0QWY4u5hhVqsgKrg" target="_blank" rel="noopener noreferrer" className="text-[#244363] underline text-sm">https://youtu.be/F9F30SWcDks?si=0QWY4u5hhVqsgKrg</a>
      </div>
    </div>
  );
};

export default YouTubeVideo; 