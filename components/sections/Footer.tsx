'use client';

import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-surface-1/30">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo + copyright */}
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-display font-bold text-xs">
                            CS
                        </div>
                        <p className="text-slate-500 text-sm">
                            © {year}{' '}
                            <span className="text-slate-400 font-medium">{personalInfo.name}</span>
                            {' '}· Built with Next.js & Three.js
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-white transition-colors p-1.5"
                        >
                            <Github size={17} />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-cyan-400 transition-colors p-1.5"
                        >
                            <Linkedin size={17} />
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-slate-600 hover:text-amber-400 transition-colors p-1.5"
                        >
                            <Mail size={17} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
