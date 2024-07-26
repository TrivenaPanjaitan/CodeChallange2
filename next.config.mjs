/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: process.env.NEXT_PUBLIC_ENV === "production" ? "export" : undefined,
  basePath:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? "/CodeChallange2"
      : undefined,
  assetPrefix:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? "/CodeChallange2/"
      : undefined,
};

export default nextConfig;
