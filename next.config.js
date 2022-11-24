/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['assets.vercel.com', 'd2drtqy2ezsot0.cloudfront.net'],
    formats: ['image/avif', 'image/webp']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [{ loader: '@svgr/webpack' }]
    })
    return config
  }
}

module.exports = nextConfig
