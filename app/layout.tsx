import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Chaitanya Sai Juturi — Full Stack Developer & Cloud Architect',
    description:
        'Senior Full Stack Developer with 4+ years building scalable systems at Nokia & Duracell. Expert in React, Node.js, Spring Boot, AWS, Kubernetes, and microservices architecture.',
    keywords: ['Full Stack Developer', 'Cloud Architect', 'React', 'Node.js', 'AWS', 'Kubernetes', 'Microservices'],
    authors: [{ name: 'Chaitanya Sai Juturi' }],
    openGraph: {
        title: 'Chaitanya Sai Juturi — Full Stack Developer',
        description: 'Architect of systems that scale, author of code that lasts.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#030712" />
            </head>
            <body className="bg-background antialiased">
                {children}
            </body>
        </html>
    );
}
