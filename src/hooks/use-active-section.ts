import { useEffect, useMemo, useState } from "react";

const DEFAULT_ROOT_MARGIN = "-45% 0px -45% 0px";

export const useActiveSection = (sectionIds: string[], rootMargin: string = DEFAULT_ROOT_MARGIN) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");

  const ids = useMemo(() => Array.from(new Set(sectionIds)).filter(Boolean), [sectionIds]);

  useEffect(() => {
    if (!ids.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin,
        threshold: [0.25, 0.5, 0.75],
      },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [ids, rootMargin]);

  return activeSection;
};

