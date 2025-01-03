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
    additionalData: `@use 'styles/theme' as *;`,
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
