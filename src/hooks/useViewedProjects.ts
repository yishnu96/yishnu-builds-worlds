import { useEffect, useState } from 'react';

const VIEWED_PROJECTS_KEY = 'portfolio_viewed_projects';

/**
 * Custom hook to track which projects the user has viewed
 * Stores visited project slugs in localStorage and provides utilities to check/mark projects
 */
export const useViewedProjects = () => {
  const [viewedProjects, setViewedProjects] = useState<Set<string>>(new Set());

  // Load viewed projects from localStorage on mount
  useEffect(() => {
    loadViewedProjects();
  }, []);

  const loadViewedProjects = () => {
    try {
      const stored = localStorage.getItem(VIEWED_PROJECTS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setViewedProjects(new Set(parsed));
      }
    } catch (error) {
      console.warn('Failed to load viewed projects:', error);
    }
  };

  const markAsViewed = (projectSlug: string) => {
    try {
      const updated = new Set(viewedProjects);
      updated.add(projectSlug);
      setViewedProjects(updated);
      localStorage.setItem(VIEWED_PROJECTS_KEY, JSON.stringify([...updated]));
    } catch (error) {
      console.warn('Failed to mark project as viewed:', error);
    }
  };

  const isViewed = (projectSlug: string): boolean => {
    return viewedProjects.has(projectSlug);
  };

  const clearViewed = () => {
    try {
      setViewedProjects(new Set());
      localStorage.removeItem(VIEWED_PROJECTS_KEY);
    } catch (error) {
      console.warn('Failed to clear viewed projects:', error);
    }
  };

  return {
    viewedProjects: [...viewedProjects],
    markAsViewed,
    isViewed,
    clearViewed,
  };
};
