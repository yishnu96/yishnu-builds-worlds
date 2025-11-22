import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_CACHE_KEY = 'portfolio_scroll_positions';
const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutes

interface ScrollCache {
  [key: string]: {
    position: number;
    timestamp: number;
  };
}

/**
 * Custom hook to manage scroll position restoration across navigation
 * Stores scroll positions in sessionStorage and restores them when returning to a page
 */
export const useScrollRestoration = () => {
  const location = useLocation();
  const scrollPositionRef = useRef<number>(0);
  const isRestoringRef = useRef<boolean>(false);

  // Save scroll position before navigation
  useEffect(() => {
    const handleScroll = () => {
      if (!isRestoringRef.current) {
        scrollPositionRef.current = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Save position when component unmounts (navigation away)
      if (scrollPositionRef.current > 0) {
        saveScrollPosition(location.pathname, scrollPositionRef.current);
      }
    };
  }, [location.pathname]);

  // Restore scroll position when component mounts
  useEffect(() => {
    const savedPosition = getScrollPosition(location.pathname);
    
    if (savedPosition !== null) {
      isRestoringRef.current = true;
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: savedPosition,
            behavior: 'smooth',
          });
          
          // Reset flag after scrolling completes
          setTimeout(() => {
            isRestoringRef.current = false;
          }, 500);
        });
      });
    } else {
      // No saved position, scroll to top
      window.scrollTo(0, 0);
    }

    // Clean up expired cache entries
    cleanupCache();
  }, [location.pathname]);

  return {
    savePosition: (position: number) => saveScrollPosition(location.pathname, position),
    getPosition: () => getScrollPosition(location.pathname),
  };
};

/**
 * Save scroll position for a specific path
 */
function saveScrollPosition(path: string, position: number): void {
  try {
    const cache = getCache();
    cache[path] = {
      position,
      timestamp: Date.now(),
    };
    sessionStorage.setItem(SCROLL_CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.warn('Failed to save scroll position:', error);
  }
}

/**
 * Get saved scroll position for a specific path
 */
function getScrollPosition(path: string): number | null {
  try {
    const cache = getCache();
    const saved = cache[path];
    
    if (saved && Date.now() - saved.timestamp < CACHE_EXPIRY) {
      return saved.position;
    }
    
    return null;
  } catch (error) {
    console.warn('Failed to get scroll position:', error);
    return null;
  }
}

/**
 * Get the entire scroll cache
 */
function getCache(): ScrollCache {
  try {
    const cached = sessionStorage.getItem(SCROLL_CACHE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch (error) {
    return {};
  }
}

/**
 * Remove expired entries from cache
 */
function cleanupCache(): void {
  try {
    const cache = getCache();
    const now = Date.now();
    const cleaned: ScrollCache = {};
    
    Object.entries(cache).forEach(([path, data]) => {
      if (now - data.timestamp < CACHE_EXPIRY) {
        cleaned[path] = data;
      }
    });
    
    sessionStorage.setItem(SCROLL_CACHE_KEY, JSON.stringify(cleaned));
  } catch (error) {
    console.warn('Failed to cleanup cache:', error);
  }
}

/**
 * Scroll to a specific section with offset
 */
export const scrollToSection = (sectionId: string, offset: number = 100): void => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
