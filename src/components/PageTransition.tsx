import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

/**
 * Page transition wrapper component
 * Handles smooth fade and scale animations for page entry/exit
 */
const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
                duration: 0.4,
                ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smooth feel
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
