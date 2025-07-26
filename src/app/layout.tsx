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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-gradient-to-b from-white to-gray-50 font-sans antialiased ${poppins.className}`}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
