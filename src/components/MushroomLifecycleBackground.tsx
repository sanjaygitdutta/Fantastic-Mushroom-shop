'use client';
import { motion } from 'framer-motion';

// Individual Growing Mushroom Component
const GrowingMushroom = ({ x, y, scale, delay, duration }: { x: string; y: string; scale: number; delay: number; duration: number }) => {
    return (
        <motion.div
            className="absolute bottom-0"
            style={{ left: x, bottom: y }}
            initial="seed"
            animate="mature"
            variants={{
                seed: { opacity: 0 },
                mature: { opacity: 1 }
            }}
            transition={{ duration: 0.5, delay: delay }}
        >
            <div className="relative flex flex-col items-center justify-end">
                {/* Spores / Seeds (Falling initially) */}
                <motion.div
                    className="absolute -top-10"
                    initial={{ opacity: 1, y: -50, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], y: [0, 20, 100], scale: [0, 1, 0] }}
                    transition={{
                        duration: duration * 0.2,
                        delay: delay,
                        repeat: Infinity,
                        repeatDelay: duration * 0.8
                    }}
                >
                    <div className="w-1 h-1 bg-forest-300 rounded-full" />
                </motion.div>

                {/* Mycelium (Roots spreading) */}
                <motion.svg
                    width="100"
                    height="40"
                    viewBox="0 0 100 40"
                    className="absolute -bottom-2 opacity-30"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.4 }}
                    transition={{ duration: duration * 0.3, delay: delay + duration * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: duration * 0.7 }}
                >
                    <path d="M50 0 Q 30 20 10 20 M50 0 Q 70 20 90 20 M50 0 Q 40 30 30 35 M50 0 Q 60 30 70 35" stroke="#5F4B32" strokeWidth="2" fill="none" />
                </motion.svg>

                {/* Stalk Growing */}
                <motion.div
                    className="w-4 bg-mushroom-200 rounded-sm origin-bottom"
                    initial={{ height: 0 }}
                    animate={{ height: 60 * scale }}
                    transition={{
                        duration: duration * 0.4,
                        delay: delay + duration * 0.2,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: duration * 0.4
                    }}
                />

                {/* Cap Expanding */}
                <motion.div
                    className="absolute"
                    style={{ bottom: 55 * scale }}
                    initial={{ scale: 0 }}
                    animate={{ scale: scale }}
                    transition={{
                        duration: duration * 0.3,
                        delay: delay + duration * 0.5,
                        type: "spring",
                        bounce: 0.4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: duration * 0.5
                    }}
                >
                    {/* Mushroom Cap SVG */}
                    <svg width="60" height="40" viewBox="0 0 60 40">
                        <path
                            d="M0 40 C0 40 0 10 30 0 C60 10 60 40 60 40 L0 40"
                            fill="#E87D7D" // Mushroom Red/Pink
                            className="drop-shadow-md"
                        />
                        <circle cx="15" cy="20" r="4" fill="white" opacity="0.8" />
                        <circle cx="45" cy="15" r="3" fill="white" opacity="0.8" />
                        <circle cx="30" cy="10" r="5" fill="white" opacity="0.8" />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
};

const MushroomLifecycleBackground = () => {
    // Generate random mushrooms
    const mushrooms = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: `${Math.random() * 90 + 5}%`, // Random X position (5-95%)
        y: `${Math.random() * 20 - 10}%`, // Random Y offset at bottom
        scale: Math.random() * 0.5 + 0.8, // Scale 0.8 - 1.3
        delay: Math.random() * 5, // Random start delay
        duration: Math.random() * 3 + 4 // Random duration 4-7s
    }));

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-mushroom-50 via-white to-forest-50 opacity-80" />

            {/* Animated Mushrooms */}
            {mushrooms.map((m) => (
                <GrowingMushroom
                    key={m.id}
                    x={m.x}
                    y={m.y}
                    scale={m.scale}
                    delay={m.delay}
                    duration={m.duration}
                />
            ))}

            {/* Ambient Particles / Spores in background */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={`spore-${i}`}
                    className="absolute bg-forest-200 rounded-full opacity-30"
                    style={{
                        width: Math.random() * 4 + 2,
                        height: Math.random() * 4 + 2,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default MushroomLifecycleBackground;
