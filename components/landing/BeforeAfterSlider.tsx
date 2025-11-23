"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Avant",
    afterLabel = "Après"
}: BeforeAfterSliderProps) {
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0); // 0 to 100 (percentage)

    // Auto-play animation
    useEffect(() => {
        if (isHovering) return;

        const controls = animate(x, [0, 100, 0], {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
        });

        return () => controls.stop();
    }, [isHovering, x]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const percentage = (offsetX / rect.width) * 100;
        x.set(Math.min(Math.max(percentage, 0), 100));
    };

    const clipPath = useTransform(x, (value) => `inset(0 ${100 - value}% 0 0)`);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[3/4] max-w-[500px] mx-auto rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl border-4 border-white"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Background Image (Before / Flat) */}
            <img
                src={beforeImage}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 pointer-events-none">
                {beforeLabel}
            </div>

            {/* Foreground Image (After / Worn) - Masked */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath }}
            >
                <img
                    src={afterImage}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 pointer-events-none">
                    {afterLabel}
                </div>
            </motion.div>

            {/* Slider Handle */}
            <motion.div
                className="absolute top-0 bottom-0 w-1 bg-white z-30 pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: useTransform(x, (value) => `${value}%`) }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
                    <MoveHorizontal className="w-5 h-5" />
                </div>
            </motion.div>
        </div>
    );
}
