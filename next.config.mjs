/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", 'assets.aceternity.com', 'images.unsplash.com'],
    // hostname: ['']
  },
};

export default nextConfig;
