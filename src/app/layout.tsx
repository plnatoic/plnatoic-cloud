import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Platoic Cloud',
  description: 'AI-Powered Solutions',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body 
        className={`min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 font-sans antialiased ${poppins.className}`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <div className="flex-1 flex flex-col">
          {children}
          <Toaster />
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
