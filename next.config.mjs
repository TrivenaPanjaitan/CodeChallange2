/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  trailingSlash: true,
  // basePath:
  //   process.env.NEXT_PUBLIC_ENV === "production"
  //     ? "/CodeChallange2"
  //     : undefined,
  // assetPrefix:
  //   process.env.NEXT_PUBLIC_ENV === "production"
  //     ? "/CodeChallange2/"
  //     : undefined,
  // trailingSlash:
  //   process.env.NEXT_PUBLIC_ENV === "production" ? true : undefined,
};

export default nextConfig;
