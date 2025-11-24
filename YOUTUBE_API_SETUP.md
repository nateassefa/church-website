# YouTube API Key Setup Instructions

Your YouTube API key has HTTP referrer restrictions that are blocking requests. Here's how to fix it:

## Option 1: Remove HTTP Referrer Restrictions (Easiest for Development)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** > **Credentials**
3. Find your YouTube API key (the one starting with `AIzaSyD5fnXFgf8aFOsLY8oi7gf8bpEqgH4RwZ8`)
4. Click on it to edit
5. Under **Application restrictions**, select **None** (or **IP addresses** if you want to restrict by IP)
6. Click **Save**

⚠️ **Note:** Removing restrictions makes your API key accessible from anywhere. For production, consider using **IP addresses** or **HTTP referrers** with your specific domains.

## Option 2: Add HTTP Referrer Restrictions (More Secure)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** > **Credentials**
3. Find your YouTube API key
4. Click on it to edit
5. Under **Application restrictions**, select **HTTP referrers (web sites)**
6. Add the following referrers:
   - `http://localhost:*/`
   - `http://localhost:8080/*`
   - `http://localhost:3000/*`
   - `https://your-vercel-domain.vercel.app/*` (replace with your actual Vercel domain)
   - `https://yourdomain.com/*` (replace with your actual domain)
7. Click **Save**

## After Making Changes

1. Wait a few minutes for the changes to propagate
2. Restart your dev server
3. The videos should now load!

## For Production (Vercel)

Make sure to add your Vercel domain to the HTTP referrer restrictions, or set the API key to allow requests from your Vercel domain.

