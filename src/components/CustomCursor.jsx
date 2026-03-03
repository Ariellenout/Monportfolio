import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = () => setIsHovering(true);
        const handleMouseOut = () => setIsHovering(false);

        window.addEventListener('mousemove', updateMousePosition);

        // Add listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseOver);
            el.addEventListener('mouseleave', handleMouseOut);
        });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseOver);
                el.removeEventListener('mouseleave', handleMouseOut);
            });
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: 'transparent',
            border: '1px solid rgba(205, 201, 196, 0.5)',
            mixBlendMode: 'normal',
            transition: { type: 'spring', mass: 0.1, stiffness: 200, damping: 20 }
        },
        hover: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 80,
            width: 80,
            backgroundColor: 'rgba(205, 201, 196, 1)',
            border: 'none',
            mixBlendMode: 'difference',
            transition: { type: 'spring', mass: 0.1, stiffness: 200, damping: 20 }
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
            />
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-accent-copper rounded-full pointer-events-none z-[10000] hidden md:block"
                style={{ transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)` }}
            />
        </>
    );
}
