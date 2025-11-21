#!/usr/bin/env node

/**
 * Image Compression Script
 * Compresses images in public/ folder while maintaining quality
 * 
 * Usage: node compress-images.js
 * 
 * Requires: npm install --save-dev sharp
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Critical images that need compression (over 1MB)
const criticalImages = [
  'public/DSC00270.png',
  'public/Copy of _I0B7294.png',
  'public/DSC00655.png',
  'public/Copy of _I0B7291.png',
  'public/DSC00310.jpg',
  'public/Copy of _I0B7303.png',
  'public/image (3).jpg',
  'public/DSC00287.JPG',
  'public/DSC00012.JPG',
  'public/upcoming_1.png',
  'public/WhatsApp Image 2025-03-29 at 14.31.16.png',
  'public/DSC00009.jpg',
  'public/PHOTO-2025-03-29-14-31-16.jpg',
  'public/87c42148-e584-4fcf-b619-b36ab2a66e6e_PhotoGrid.png',
  'public/PHOTO-2025-06-15-14-20-21.jpg',
  'public/nema.png',
  'public/IMG_1210.jpg',
  'public/9093e918-84b5-47fd-92e5-87c464ab6c73.png',
];

async function compressImage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return null;
    }

    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    const ext = path.extname(filePath).toLowerCase();
    
    // Skip if already small
    if (originalSize < 500000) { // 500KB
      console.log(`⏭️  Skipping ${filePath} (already small: ${(originalSize / 1024).toFixed(1)}KB)`);
      return null;
    }

    console.log(`\n📸 Compressing: ${filePath} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);

    // Create backup
    const backupPath = filePath + '.backup';
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
      console.log(`   💾 Backup created: ${backupPath}`);
    }

    let outputPath = filePath;
    let image = sharp(filePath);

    // Get image metadata
    const metadata = await image.metadata();
    const { width, height } = metadata;

    // Resize if too large (max 1920px on longest side)
    if (width > 1920 || height > 1920) {
      const maxDimension = Math.max(width, height);
      const scale = 1920 / maxDimension;
      const newWidth = Math.round(width * scale);
      const newHeight = Math.round(height * scale);
      image = image.resize(newWidth, newHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
      console.log(`   📐 Resizing: ${width}x${height} → ${newWidth}x${newHeight}`);
    }

    // Compress based on format (keep original format)
    if (ext === '.png') {
      // PNG: optimize PNG in place
      await image
        .png({ compressionLevel: 9, quality: 90 })
        .toFile(filePath + '.optimized');
      fs.renameSync(filePath + '.optimized', filePath);
      outputPath = filePath;
    } else if (ext === '.jpg' || ext === '.jpeg' || ext === '.JPG') {
      // JPEG: optimize with high quality
      await image
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(filePath + '.optimized');
      fs.renameSync(filePath + '.optimized', filePath);
      outputPath = filePath;
    }

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    const savedMB = ((originalSize - newSize) / 1024 / 1024).toFixed(2);

    console.log(`   ✅ Done! ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (saved ${savings}% / ${savedMB}MB)`);

    return { originalSize, newSize, savings, outputPath };
  } catch (error) {
    console.error(`   ❌ Error compressing ${filePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting image compression...\n');
  console.log('This will compress large images while maintaining good quality.\n');

  let totalOriginal = 0;
  let totalNew = 0;
  const results = [];

  for (const imagePath of criticalImages) {
    const result = await compressImage(imagePath);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      results.push(result);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total new size: ${(totalNew / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((1 - totalNew / totalOriginal) * 100).toFixed(1)}% / ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)}MB`);
  console.log('\n✅ Compression complete!');
  console.log('💡 Tip: Test your site to ensure images still look good.');
  console.log('💾 Backups saved as .backup files (you can delete them after testing)');
}

// Run the script
main().catch((error) => {
  if (error.code === 'MODULE_NOT_FOUND' && error.message.includes('sharp')) {
    console.error('❌ Error: sharp is not installed.');
    console.log('\n📦 Please install it first:');
    console.log('   npm install --save-dev sharp');
    console.log('\nThen run this script again:');
    console.log('   node compress-images.js');
  } else {
    console.error('❌ Error:', error.message);
  }
  process.exit(1);
});

