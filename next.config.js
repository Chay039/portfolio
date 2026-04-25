/** @type {import('next').NextConfig} */
const nextConfig = {
    // DO NOT use output: 'export' on Vercel unless you have a specific reason.
    // Vercel handles the optimization better if you let it be a standard build.
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
