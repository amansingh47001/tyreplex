/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath: '/tyreplex',
    images: {
        domains: ["cdn.tyreplex.net"]
    }
};

export default nextConfig;
