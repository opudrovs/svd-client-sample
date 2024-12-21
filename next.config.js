/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
      // Scss code that you want to be prepended to every single scss file.
      prependData: '@import \'styles/theme\';'
  },
};

export default nextConfig;
