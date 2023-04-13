/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  pageExtensions: ["page.tsx", "page.ts"],
  output: "export",
};

module.exports = nextConfig;
