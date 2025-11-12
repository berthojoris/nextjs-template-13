import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure the asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://nextjs-template-13-ssg.on-forge.com' : '',
  
  // Configure the base path for production
  basePath: '',
  
  // Add environment variables to the client-side
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
