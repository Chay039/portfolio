/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: false,
    images: {
        unoptimized: true,
    },
    assetPrefix: '',
    basePath: '',
    turbopack: {},
};

module.exports = nextConfig;
