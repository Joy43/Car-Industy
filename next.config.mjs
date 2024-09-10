/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',  // Replace with your allowed domain(s)
        port: '',
        pathname: '**',  // Allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'another-allowed-domain.com',  
        port: '',
        pathname: '**',
      },
    ],
  },

  webpack: (config) => {
    // Adding rule for .webm or other media file types like mp4
    config.module.rules.push({
      test: /\.(webm|mp4)$/,  // Extend this for other formats if needed
      type: 'asset/resource', 
      generator: {
        filename: 'static/media/[name][ext]',  // Path where files are output
      },
    });

    return config;
  },
};

export default nextConfig;
