export const metadata = {
    title: 'UK Salary Calculator',
    description: 'Calculate your UK take-home pay',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }