'use client';

import './globals.css';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  // Remove Grammarly attributes on mount
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.removeAttribute('data-new-gr-c-s-check-loaded');
      body.removeAttribute('data-gr-ext-installed');
    }
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-gray-50">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}