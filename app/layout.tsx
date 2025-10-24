// app/layout.tsx
import './globals.css'; // optional: create this if you import global styles

export const metadata = {
  title: 'Smart Conditional Aid',
  description: 'Demo'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
