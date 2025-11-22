import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HIGHLIGHT_DURATION = 2000; // 2 seconds

/**
 * Custom hook to manage temporary highlight effect when user returns to a card
 * Detects navigation from case study and highlights the source card with purple glow
 */
export const useCardHighlight = (projectId: string) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if we're returning from a case study page
    const state = location.state as { fromProject?: string } | null;
    
    if (state?.fromProject === projectId) {
      setIsHighlighted(true);
      
      // Scroll to the highlighted card
      setTimeout(() => {
        const element = document.getElementById(`project-${projectId}`);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 150; // Offset for header
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
      
      // Remove highlight after duration
      const timer = setTimeout(() => {
        setIsHighlighted(false);
      }, HIGHLIGHT_DURATION);
      
      return () => clearTimeout(timer);
    }
  }, [location, projectId]);

  return isHighlighted;
};
