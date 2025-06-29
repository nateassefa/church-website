# YouTube API Setup Guide

## Overview
The "Watch Last Sunday's Service" section has been updated to embed YouTube videos from the LivingHopeGenChurch channel. Currently, it uses a placeholder video ID, but can be enhanced to automatically fetch the latest video using the YouTube Data API.

## Current Implementation
- The component displays a responsive YouTube video embed
- Uses the same styling as the original "Watch a Service" section
- Includes fallback handling for when videos are unavailable
- Mobile-friendly responsive design

## To Enable YouTube API Integration

### 1. Get a YouTube Data API Key
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Create credentials (API Key)
5. Restrict the API key to YouTube Data API v3 and your domain

### 2. Add Environment Variable
Create a `.env` file in the root directory and add:
```
VITE_YOUTUBE_API_KEY=your_api_key_here
```

### 3. Update the Component
Replace the placeholder implementation in `src/components/YouTubeVideo.tsx` with the full API version:

```typescript
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
  const [video, setVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const channelId = 'LivingHopeGenChurch';
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        
        if (!apiKey) {
          throw new Error('YouTube API key not configured');
        }

        // Get channel's uploads playlist
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${channelId}&key=${apiKey}`
        );
        
        if (!channelResponse.ok) {
          throw new Error('Failed to fetch channel information');
        }
        
        const channelData = await channelResponse.json();
        
        if (!channelData.items || channelData.items.length === 0) {
          throw new Error('Channel not found');
        }
        
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
        
        // Get latest video from uploads playlist
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${apiKey}`
        );
        
        if (!videosResponse.ok) {
          throw new Error('Failed to fetch video information');
        }
        
        const videosData = await videosResponse.json();
        
        if (!videosData.items || videosData.items.length === 0) {
          throw new Error('No videos found');
        }
        
        setVideo(videosData.items[0].snippet);
      } catch (err) {
        console.error('Error fetching YouTube video:', err);
        setError(err instanceof Error ? err.message : 'Failed to load video');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVideo();
  }, []);

  // ... rest of component with loading and error states
};
```

## Features
- **Automatic Video Fetching**: Gets the most recent video from the church's YouTube channel
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Error Handling**: Graceful fallback when API fails or no videos are found
- **Loading States**: Shows loading animation while fetching video data
- **Consistent Styling**: Matches the original section's design and layout

## Channel Configuration
- **Channel ID**: LivingHopeGenChurch
- **API Endpoint**: YouTube Data API v3
- **Video Source**: Channel's uploads playlist (most recent video)

## Security Notes
- API key should be restricted to your domain
- Consider implementing rate limiting
- Monitor API usage to stay within quotas

## Troubleshooting
1. **"API key not configured"**: Check your `.env` file and ensure the variable name is correct
2. **"Channel not found"**: Verify the channel ID is correct
3. **"No videos found"**: Check if the channel has uploaded videos
4. **CORS errors**: Ensure your domain is allowed in the API key restrictions 