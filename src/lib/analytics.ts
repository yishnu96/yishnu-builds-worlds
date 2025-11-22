/**
 * Analytics utility module for tracking user behavior
 * Supports Google Analytics, Plausible, and custom analytics solutions
 */

// Types
interface AnalyticsEvent {
  event: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

// Check if analytics is available
const isGAAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof (window as any).gtag === 'function';
};

const isPlausibleAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof (window as any).plausible === 'function';
};

/**
 * Send a generic analytics event
 */
const sendEvent = (event: AnalyticsEvent): void => {
  // Google Analytics
  if (isGAAvailable()) {
    (window as any).gtag('event', event.event, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event,
    });
  }

  // Plausible Analytics
  if (isPlausibleAvailable()) {
    (window as any).plausible(event.event, { props: event });
  }

  // Console logging for development
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', event);
  }
};

/**
 * Track project card click
 */
export const trackProjectCardClick = (projectId: string, projectName: string): void => {
  sendEvent({
    event: 'project_card_click',
    category: 'engagement',
    label: projectName,
    project_id: projectId,
    project_name: projectName,
  });
};

/**
 * Track case study page view
 */
export const trackPageView = (path: string, title: string): void => {
  sendEvent({
    event: 'case_study_view',
    category: 'navigation',
    label: title,
    page_path: path,
    page_title: title,
  });
};

/**
 * Track scroll depth on case studies
 */
export const trackScrollDepth = (depth: number, projectSlug: string): void => {
  // Only track at specific milestones: 25%, 50%, 75%, 100%
  const milestones = [25, 50, 75, 100];
  
  if (milestones.includes(depth)) {
    sendEvent({
      event: 'scroll_depth',
      category: 'engagement',
      label: `${depth}%`,
      value: depth,
      project_slug: projectSlug,
    });
  }
};

/**
 * Track time spent on a case study
 */
export const trackTimeOnPage = (duration: number, projectSlug: string): void => {
  sendEvent({
    event: 'time_on_page',
    category: 'engagement',
    label: projectSlug,
    value: Math.round(duration / 1000), // Convert to seconds
    project_slug: projectSlug,
    duration_seconds: Math.round(duration / 1000),
  });
};

/**
 * Track navigation patterns (prev/next buttons, breadcrumbs, etc.)
 */
export const trackNavigation = (type: 'prev' | 'next' | 'breadcrumb' | 'back', from: string, to: string): void => {
  sendEvent({
    event: 'navigation_action',
    category: 'navigation',
    label: type,
    navigation_type: type,
    from_page: from,
    to_page: to,
  });
};

/**
 * Track swipe gestures on mobile
 */
export const trackSwipeGesture = (direction: 'left' | 'right', projectSlug: string): void => {
  sendEvent({
    event: 'swipe_gesture',
    category: 'mobile_interaction',
    label: direction,
    swipe_direction: direction,
    project_slug: projectSlug,
  });
};

/**
 * Hook to track time on page
 */
export const useTimeOnPage = (projectSlug: string) => {
  let startTime: number;

  const startTracking = () => {
    startTime = Date.now();
  };

  const stopTracking = () => {
    if (startTime) {
      const duration = Date.now() - startTime;
      // Only track if user spent at least 5 seconds
      if (duration >= 5000) {
        trackTimeOnPage(duration, projectSlug);
      }
    }
  };

  return { startTracking, stopTracking };
};

/**
 * Hook to track scroll depth
 */
export const useScrollDepth = (projectSlug: string) => {
  const trackedMilestones = new Set<number>();

  const trackScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

    // Track at 25%, 50%, 75%, 100%
    const milestones = [25, 50, 75, 100];
    
    milestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);
        trackScrollDepth(milestone, projectSlug);
      }
    });
  };

  return { trackScroll };
};
