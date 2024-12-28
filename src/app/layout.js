'use client';

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
      <head>
        <title>UK Salary Calculator 2024/25</title>
        <meta name="description" content="Calculate your UK take-home pay accurately" />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}