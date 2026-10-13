import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const files = [
  'DSC00565.png',
  'DSC00436.JPG',
  'DSC00270.png',
  'DSC00655.png',
  'Copy of _I0B7294.png',
  'Copy of _I0B7291.png',
  'WhatsApp Image 2025-03-29 at 14.31.16.png',
  'IMG_6655_PhotoGrid.png',
  'public.png',
  'PHOTO-2025-06-15-14-20-21.jpg',
  'PHOTO-2025-03-29-14-31-16.jpg',
  '87c42148-e584-4fcf-b619-b36ab2a66e6e_PhotoGrid.png',
  'DSC00310.jpg',
  'DSC00287.JPG',
  'DSC00439.jpg',
  'image (3).jpg',
  'ChatGPT Image Dec 16, 2025, 02_16_58 PM.png',
  'ChatGPT Image Dec 16, 2025, 02_50_34 PM.png',
  'ChatGPT Image Nov 21, 2025, 05_05_29 PM.png',
  'ChatGPT Image Nov 21, 2025, 04_27_38 PM.png',
  'ChatGPT Image Nov 21, 2025, 04_49_12 PM.png',
  'ChatGPT Image Nov 21, 2025, 04_32_25 PM.png',
  'ChatGPT Image Nov 21, 2025, 04_36_33 PM.png',
  '37ef91a4-a452-4e5f-a4de-f260106e9b17.png',
  '490103190_122106027620827914_5173506189753291620_n_PhotoGrid.png',
];

const jpegOptions = { quality: 72, mozjpeg: true, chromaSubsampling: '4:2:0' };

for (const name of files) {
  const input = path.join(publicDir, name);
  if (!fs.existsSync(input)) {
    console.log('missing', name);
    continue;
  }

  const ext = path.extname(name);
  const isJpeg = ['.jpg', '.jpeg', '.JPG', '.JPEG'].includes(ext);
  const output = isJpeg ? input : path.join(publicDir, `${path.basename(name, ext)}.jpg`);
  const temp = output + '.tmp';
  const before = fs.statSync(input).size;

  await sharp(input)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg(jpegOptions)
    .toFile(temp);

  fs.renameSync(temp, output);
  const after = fs.statSync(output).size;
  console.log(
    `${name}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${path.basename(output)} ${(after / 1024 / 1024).toFixed(2)}MB`
  );

  if (!isJpeg && output !== input && fs.existsSync(input) && input !== output) {
    // Keep the original PNG only if it's still referenced; we'll switch code to .jpg
  }
}
