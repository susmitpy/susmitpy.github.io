let credlyLoaded = false;
let credlyPromise: Promise<void> | null = null;

export function loadCredly(): Promise<void> {
  // If already loaded, return resolved promise
  if (credlyLoaded) {
    return Promise.resolve();
  }

  // If loading is in progress, return the existing promise
  if (credlyPromise) {
    return credlyPromise;
  }

  // Check if script already exists in DOM
  const existingScript = document.querySelector('script[src*="credly.com/assets/utilities/embed.js"]');
  if (existingScript) {
    credlyLoaded = true;
    return Promise.resolve();
  }

  // Create and load the script
  credlyPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    
    script.onload = () => {
      credlyLoaded = true;
      credlyPromise = null;
      resolve();
    };
    
    script.onerror = () => {
      credlyPromise = null;
      reject(new Error('Failed to load Credly script'));
    };
    
    document.head.appendChild(script);
  });

  return credlyPromise;
}
