export const PAGE_IMAGES: Record<string, string[]> = {
  '/': [
    '/church_logo_lutheran.png',
    '/church_logo_white.png',
    '/home-strip-2.jpg',
    '/home-strip-3.jpg',
    '/home-strip-4.jpg',
  ],
  '/about': ['/DSC00310.jpg', '/church-family.jpg'],
  '/statement-of-faith': ['/statement-of-faith-hero.jpg', '/sacraments-communion.jpg'],
  '/ministries': [
    '/ministries-hero.jpg',
    '/ministry-worship.jpg',
    '/ministry-children.jpg',
    '/ministry-youth.jpg',
    '/ministry-young-adults.jpg',
    '/ministry-prayer.jpg',
    '/PHOTO-2025-03-29-14-31-16.jpg',
  ],
  '/events': [
    '/Copy of _I0B7294.jpg',
    '/fall-thanksgiving-conference-flyer.jpg',
    '/friendsgiving-flyer.jpg',
  ],
  '/small-groups': [
    '/small-groups-hero.jpg',
    '/public.jpg',
    '/ChatGPT Image Nov 21, 2025, 05_05_29 PM.jpg',
    '/IMG_6655_PhotoGrid.jpg',
    '/37ef91a4-a452-4e5f-a4de-f260106e9b17.jpg',
    '/ChatGPT Image Nov 21, 2025, 04_27_38 PM.jpg',
    '/ChatGPT Image Nov 21, 2025, 04_49_12 PM.jpg',
    '/ChatGPT Image Nov 21, 2025, 04_32_25 PM.jpg',
    '/ChatGPT Image Nov 21, 2025, 04_36_33 PM.jpg',
  ],
  '/plan-visit': ['/become-a-member.jpg'],
  '/watch-service': ['/recent-sermons.jpg'],
};

export const PHOTO_V = 'orig-full';

export function photoUrl(src: string) {
  if (!src || src.startsWith('http') || src.includes('?')) return src;
  return `${src}?v=${PHOTO_V}`;
}

const preloaded = new Set<string>();

export function preloadImages(urls: string[] = []) {
  urls.forEach((src) => {
    const href = photoUrl(src);
    if (!href || preloaded.has(href)) return;
    preloaded.add(href);
    const img = new Image();
    img.decoding = 'async';
    img.src = encodeURI(href);
  });
}

export function preloadPageImages(pathname: string) {
  preloadImages(PAGE_IMAGES[pathname] || []);
}

export function preloadAllPageImages() {
  Object.values(PAGE_IMAGES).forEach((urls) => preloadImages(urls));
}
