"use client";
import { useEffect, useRef } from 'react';
import { loadCredly } from '@/utils/loadCredly';

interface CredlyBadgeProps {
  badgeId: string;
  width?: number;
  height?: number;
  host?: string;
}

export default function CredlyBadge({
  badgeId,
  width = 150,
  height = 270,
  host = "https://www.credly.com"
}: CredlyBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeBadge = async () => {
      try {
        await loadCredly();
        
        // After script is loaded, we need to trigger Credly's embed scanner
        // by re-appending the script or calling their embed function
        if (window && (window as any).credlyEmbed) {
          // If Credly provides an embed function, call it
          (window as any).credlyEmbed();
        } else {
          // Otherwise, re-append the script to trigger scanning
          const existingScript = document.querySelector('script[src*="credly.com/assets/utilities/embed.js"]');
          if (existingScript && badgeRef.current) {
            // Clone and re-append the script to trigger re-scanning
            const newScript = existingScript.cloneNode(true) as HTMLScriptElement;
            document.head.appendChild(newScript);
            // Remove the cloned script after a short delay
            setTimeout(() => {
              if (document.head.contains(newScript)) {
                document.head.removeChild(newScript);
              }
            }, 100);
          }
        }
      } catch (error) {
        console.error('Failed to load Credly badge:', error);
      }
    };

    initializeBadge();
  }, [badgeId]);

  return (
    <div
      ref={badgeRef}
      data-iframe-width={width.toString()}
      data-iframe-height={height.toString()}
      data-share-badge-id={badgeId}
      data-share-badge-host={host}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minWidth: `${width}px`,
        minHeight: `${height}px`,
      }}
      className="flex items-center justify-center"
    />
  );
}
