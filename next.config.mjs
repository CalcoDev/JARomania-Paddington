/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/jaromania-paddington",
  assetPrefix: process.env.NODE_ENV === "production" ? "/jaromania-paddington" : undefined,
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
