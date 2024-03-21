/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    //concurrentFeatures: true,
    output: "standalone",
    experimental: {
        ppr: false,
    },
};

export default nextConfig;
