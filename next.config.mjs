// Import necessary modules (if required)
import { resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '**',
      },
      
      
     
    ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(webm)$/, // Matches .webm files
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // Keeps the original file name and extension
            outputPath: 'static/media/', // Outputs to the specified directory
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
