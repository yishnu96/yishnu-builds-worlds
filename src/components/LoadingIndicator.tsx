import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingIndicatorProps {
    isLoading: boolean;
    delay?: number; // Delay in ms before showing indicator
}

/**
 * Loading indicator component
 * Shows a spinning gradient circle during page transitions
 * Only appears if loading exceeds the specified delay (default 200ms)
 */
const LoadingIndicator = ({ isLoading, delay = 200 }: LoadingIndicatorProps) => {
    const [showIndicator, setShowIndicator] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isLoading) {
            // Only show indicator after delay
            timer = setTimeout(() => {
                setShowIndicator(true);
            }, delay);
        } else {
            setShowIndicator(false);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isLoading, delay]);

    return (
        <AnimatePresence>
            {showIndicator && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D1B2A]/80 backdrop-blur-sm"
                >
                    <div className="relative">
                        {/* Spinning gradient circle */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="h-16 w-16 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #7209B7, #06D6A0, #7209B7)',
                            }}
                        />
                        {/* Inner circle to create ring effect */}
                        <div className="absolute inset-2 rounded-full bg-[#0D1B2A]" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingIndicator;
