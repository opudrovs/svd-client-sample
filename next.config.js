import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    // Prepend theme styles to every SCSS file
    additionalData: `@use 'styles/theme' as *;`, // This makes theme.scss accessible
    includePaths: [path.join(__dirname, 'styles')], // Add your styles folder to SCSS include paths
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias, // Preserve existing aliases
      '@': path.resolve(__dirname, 'src'), // Map @ to the src directory
    };
    return config;
  },
};

export default nextConfig;
