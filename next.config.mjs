/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statyczny eksport w trybie produkcyjnym
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),

  images: {
    // Wyłącz optymalizację obrazów tylko w trybie produkcyjnym
    unoptimized: process.env.NODE_ENV === 'production',
  },

  trailingSlash: true, // Dodaj ukośnik na końcu ścieżek
};

export default nextConfig;