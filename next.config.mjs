/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Statyczny eksport tylko w produkcji
  ...(isProd && { output: 'export' }),

  images: {
    // Przy static export musi być true; jeśli kiedyś wrócisz do SSR – ustaw false
    unoptimized: isProd,
    // Lista preferowanych formatów (działa tylko gdy unoptimized === false)
    formats: ['image/avif', 'image/webp'],
  },

  trailingSlash: false,
};

export default nextConfig;