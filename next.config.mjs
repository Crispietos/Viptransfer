/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statyczny eksport w trybie produkcyjnym
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),

  images: {
    // Wyłącz optymalizację obrazów tylko w trybie produkcyjnym
    unoptimized: process.env.NODE_ENV === 'production',
  },

  trailingSlash: true, // Dodaj ukośnik na końcu ścieżek

  eslint: {
    // Ignoruj błędy ESLint podczas builda (opcjonalnie – tylko jeśli jesteś pewien, że ostrzeżenia nie wpływają krytycznie na funkcjonalność)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;