/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.prod.website-files.com',
                pathname: '/**',
            }
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
