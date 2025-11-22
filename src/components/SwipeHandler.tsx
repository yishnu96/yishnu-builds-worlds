import { useEffect, useRef, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackSwipeGesture } from '@/lib/analytics';

interface SwipeHandlerProps {
    children: ReactNode;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    previousSlug?: string | null;
    nextSlug?: string | null;
    currentSlug: string;
    threshold?: number; // Minimum distance for swipe (px)
    velocityThreshold?: number; // Minimum velocity for swipe (px/ms)
}

/**
 * Component to handle swipe gestures on mobile
 * Swipe right → Previous project
 * Swipe left → Next project
 */
const SwipeHandler = ({
    children,
    onSwipeLeft,
    onSwipeRight,
    previousSlug,
    nextSlug,
    currentSlug,
    threshold = 100,
    velocityThreshold = 0.3,
}: SwipeHandlerProps) => {
    const navigate = useNavigate();
    const touchStartX = useRef<number>(0);
    const touchStartY = useRef<number>(0);
    const touchStartTime = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
            touchStartTime.current = Date.now();
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndTime = Date.now();

            const deltaX = touchEndX - touchStartX.current;
            const deltaY = touchEndY - touchStartY.current;
            const deltaTime = touchEndTime - touchStartTime.current;

            // Calculate velocity
            const velocity = Math.abs(deltaX) / deltaTime;

            // Check if horizontal swipe (not vertical scroll)
            const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * 2;

            if (isHorizontalSwipe && Math.abs(deltaX) > threshold && velocity > velocityThreshold) {
                if (deltaX > 0) {
                    // Swipe right → Previous project
                    if (previousSlug) {
                        trackSwipeGesture('right', currentSlug);
                        onSwipeRight?.();
                        navigate(`/work/${previousSlug}`);
                    }
                } else {
                    // Swipe left → Next project
                    if (nextSlug) {
                        trackSwipeGesture('left', currentSlug);
                        onSwipeLeft?.();
                        navigate(`/work/${nextSlug}`);
                    }
                }
            }
        };

        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [navigate, previousSlug, nextSlug, currentSlug, threshold, velocityThreshold, onSwipeLeft, onSwipeRight]);

    return (
        <div ref={containerRef} className="touch-pan-y">
            {children}
        </div>
    );
};

export default SwipeHandler;
