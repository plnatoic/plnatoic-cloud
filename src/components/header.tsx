'use client';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ThemeToggle } from './theme-toggle';

const Logo = () => (
  <Link href="#" className="flex items-center gap-2" aria-label="Platoic Home">
    <svg
      className="h-8 w-auto text-foreground"
      viewBox="0 0 200 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.9,36.9c-4.3,0-8.2-1.3-11.7-4c-3.5-2.6-5.2-6.1-5.2-10.3c0-4.7,2-8.5,5.9-11.4c4-2.9,8.7-4.4,14.1-4.4h3.4v30.1H23.9z M24.3,9.8c-3.6,0-6.7,1.2-9.2,3.5c-2.5,2.3-3.8,5.4-3.8,9.2c0,3.5,1.1,6.4,3.4,8.5s5.1,3.2,8.4,3.2h1.6V9.8H24.3z"/>
      <path d="M47.7,36.9V6.8h7.9v30.1H47.7z"/>
      <path d="M85.3,21.5c-3.2-2.8-7-4.2-11.5-4.2c-4.4,0-8.2,1.4-11.2,4.3c-3,2.9-4.5,6.5-4.5,10.9c0,4.6,1.6,8.4,4.9,11.2c3.3,2.8,7.3,4.2,12.1,4.2c4.3,0,8-1.1,11.2-3.4c3.2-2.3,4.8-5.3,4.8-9.2v-1.1h-16v-6.3h23.5v12.2c-1.5,4.3-4.3,7.6-8.3,9.9c-4,2.3-8.8,3.4-14.3,3.4c-6.8,0-12.5-2.2-17.1-6.7c-4.6-4.5-6.9-10.1-6.9-16.8c0-6.7,2.3-12.4,7-17.1c4.7-4.7,10.3-7,16.8-7c5.6,0,10.5,1.6,14.7,4.8L85.3,21.5z"/>
      <path d="M123.4,36.9h-8.2L106.3,9.5c-0.4-1-0.8-2.3-1.1-3.9h-0.2c-0.2,1.6-0.5,2.9-0.9,4L95.2,36.9h-8.1L75.8,6.8h8.5l7.9,23.5c0.4,1.4,0.7,2.8,0.9,4.2h0.2c0.3-1.5,0.6-2.9,0.9-4.3l7.6-23.3h8.1l7.8,23.3c0.3,1.3,0.5,2.7,0.8,4.1h0.2c0.2-1.4,0.5-2.8,0.8-4.2l8-23.5h8.4L123.4,36.9z"/>
      <path d="M149.2,36.9V6.8h7.9v30.1H149.2z"/>
      <path d="M149.2,36.9V6.8h7.9v30.1H149.2z M153.1,3.2c-1.1,0-2-0.4-2.7-1C149.7,1.5,149.4,0.8,149.4,0h7.8c0,0.8-0.3,1.5-1,2.1C155.5,2.9,154.5,3.2,153.1,3.2z"/>
      <path d="M180.7,36.9c-4.3,0-8.2-1.3-11.7-4c-3.5-2.6-5.2-6.1-5.2-10.3c0-4.7,2-8.5,5.9-11.4c4-2.9,8.7-4.4,14.1-4.4h3.4v30.1H180.7z M181.1,9.8c-3.6,0-6.7,1.2-9.2,3.5c-2.5,2.3-3.8,5.4-3.8,9.2c0,3.5,1.1,6.4,3.4,8.5s5.1,3.2,8.4,3.2h1.6V9.8H181.1z"/>
      <path d="M190.4,32c0,2.1,0.6,3.7,1.9,5c1.3,1.2,2.8,1.8,4.7,1.8c1.9,0,3.5-0.6,4.7-1.7c1.2-1.1,1.8-2.7,1.8-4.7c0-2.1-0.6-3.7-1.8-5c-1.2-1.2-2.8-1.9-4.7-1.9c-1.9,0-3.5,0.6-4.7,1.8C191,28.4,190.4,30,190.4,32z"/>
    </svg>
  </Link>
);

export default function Header() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                </Link>
            ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild variant="default" className="hidden md:flex">
            <a href="mailto:hello@platonic.area">Email Me</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <nav className="grid gap-6 text-lg font-medium mt-16">
                <div className="px-6 pb-6">
                  <Logo />
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground px-6 py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="absolute bottom-6 left-6 right-6">
                 <Button asChild variant="default" className="w-full">
                    <a href="mailto:hello@platonic.area">Email Me</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
