# Quick Image Compression Guide

## Option 1: Online Tools (Easiest - No Installation)

### For PNG files:
1. Go to https://tinypng.com/
2. Upload your large PNG files
3. Download the compressed versions
4. Replace the originals in `public/` folder

### For JPG files:
1. Go to https://squoosh.app/
2. Upload your large JPG files
3. Adjust quality (try 80-85% for good balance)
4. Download and replace originals

### Critical Images to Compress First:
- `DSC00270.png` (39.5 MB) - Plan Your Visit hero
- `Copy of _I0B7294.png` (55.6 MB) - Events hero
- `DSC00655.png` (51.0 MB) - Ministries card
- `Copy of _I0B7291.png` (29.0 MB) - Ministries/Worship
- `DSC00310.jpg` (21.1 MB) - About Us hero
- `Copy of _I0B7303.png` (63.8 MB) - Events card

## Option 2: Use macOS Built-in Tools

If you're on Mac, you can use `sips` command:

```bash
# Compress a PNG (reduces quality but keeps format)
sips -s format jpeg --setProperty formatOptions 80 DSC00270.png --out DSC00270-compressed.jpg

# Or resize and compress
sips -Z 1920 DSC00270.png --out DSC00270-resized.png
```

## Option 3: Install Sharp (Best for Automation)

```bash
npm install --save-dev sharp
```

Then I can create a Node.js script to compress all images automatically.

---

**Recommendation:** Use TinyPNG/Squoosh for the 6 critical images above first. This will give you immediate 60-80% file size reduction with minimal quality loss.

