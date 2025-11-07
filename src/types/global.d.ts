declare global {
  interface Window {
    __lenis?: {
      scrollTo: (target: HTMLElement | string | number, options?: { offset?: number }) => void;
      stop?: () => void;
    };
  }
}

export {};

