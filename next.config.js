/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Оптимизация для статических ресурсов
  images: {
    unoptimized: true
  },
  // Настройки для корректной работы с Three.js на Vercel
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]
    return config
  },
  // Настройки для лучшей производительности
  compress: true,
  poweredByHeader: false,
  generateEtags: false
}

module.exports = nextConfig
