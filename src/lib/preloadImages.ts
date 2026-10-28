export const PAGE_IMAGES: Record<string, string[]> = {
  '/': [
    '/church_logo_lutheran.png',
    '/DSC00270.jpg',
    '/DSC00436.JPG',
    '/DSC00439.jpg',
    '/DSC00310.jpg',
  ],
  '/about': ['/DSC00310.jpg', '/image (3).jpg'],
  '/statement-of-faith': ['/statement-of-faith-hero.jpg'],
  '/ministries': [
    '/WhatsApp Image 2025-03-29 at 14.31.16.jpg',
    '/Copy of _I0B7291.jpg',
    '/PHOTO-2025-06-15-14-20-21.jpg',
    '/IMG_6655_PhotoGrid.jpg',
    '/DSC00655.jpg',
    '/87c42148-e584-4fcf-b619-b36ab2a66e6e_PhotoGrid.jpg',
    '/PHOTO-2025-03-29-14-31-16.jpg',
  ],
  '/events': [
    '/Copy of _I0B7294.jpg',
  ],
  '/small-groups': [
    '/DSC00436.JPG',
    '/public.jpg',
    '/ChatGPT Image Nov 21, 2025, 05_05_29 PM.jpg',
    '/IMG_6655_PhotoGrid.jpg',
    '/37ef91a4-a452-4e5f-a4de-f260106e9b17.jpg',
    '/ChatGPT Image Nov 21, 2025, 04_27_38 PM.jpg',
    '/ChatGPT Image Nov 21, 2025, 04_49_12 PM.jpg',
    '/ChatGPT Image Nov 21, 2025, 04_32_25 PM.jpg',
    '/ChatGPT Image Nov 21, 2025, 04_36_33 PM.jpg',
  ],
  '/plan-visit': ['/DSC00439.jpg'],
  '/watch-service': ['/DSC00565.jpg'],
};

const preloaded = new Set<string>();

export function preloadImages(urls: string[] = []) {
  urls.forEach((src) => {
    if (!src || preloaded.has(src)) return;
    preloaded.add(src);
    const img = new Image();
    img.decoding = 'async';
    img.src = encodeURI(src);
  });
}

export function preloadPageImages(pathname: string) {
  preloadImages(PAGE_IMAGES[pathname] || []);
}

export function preloadAllPageImages() {
  Object.values(PAGE_IMAGES).forEach((urls) => preloadImages(urls));
}
