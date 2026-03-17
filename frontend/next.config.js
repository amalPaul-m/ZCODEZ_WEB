/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'bpract.com' },
      { protocol: 'https', hostname: 'zcodez.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' }
    ]
  }
};

module.exports = nextConfig;
