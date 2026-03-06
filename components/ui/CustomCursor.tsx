'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const cursorDot = useRef<HTMLDivElement>(null);
    const cursorRing = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        // Mobile: don't mount custom cursor
        if (window.innerWidth < 768) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let raf: number;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (cursorDot.current) {
                cursorDot.current.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
            }
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            if (cursorRing.current) {
                cursorRing.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
            }
            raf = requestAnimationFrame(animate);
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const addHover = () => {
            document.querySelectorAll('a, button, [data-cursor="hover"]').forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        raf = requestAnimationFrame(animate);
        addHover();

        // Re-add hover listeners when DOM changes
        const observer = new MutationObserver(addHover);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(raf);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Dot */}
            <div
                ref={cursorDot}
                className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
                style={{ willChange: 'transform' }}
            >
                <div
                    className="w-2.5 h-2.5 rounded-full transition-all duration-150"
                    style={{
                        background: isHovering ? '#a855f7' : '#06b6d4',
                        transform: isClicking ? 'scale(0.5)' : 'scale(1)',
                        boxShadow: isHovering
                            ? '0 0 12px rgba(168,85,247,0.8)'
                            : '0 0 12px rgba(6,182,212,0.8)',
                    }}
                />
            </div>

            {/* Ring */}
            <div
                ref={cursorRing}
                className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
                style={{ willChange: 'transform' }}
            >
                <div
                    className="w-10 h-10 rounded-full border transition-all duration-300"
                    style={{
                        borderColor: isHovering ? 'rgba(168,85,247,0.6)' : 'rgba(6,182,212,0.4)',
                        transform: isHovering ? 'scale(1.8)' : isClicking ? 'scale(0.8)' : 'scale(1)',
                        background: isHovering ? 'rgba(168,85,247,0.05)' : 'transparent',
                    }}
                />
            </div>
        </>
    );
}
