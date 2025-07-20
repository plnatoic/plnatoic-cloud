
'use client';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { ThemeToggle } from './theme-toggle';
import Image from 'next/image';
import logo from './logo.svg';

const Logo = () => (
  <Link href="#" className="flex items-center gap-2" aria-label="Platoic Home">
    <Image src={logo} alt="Logo" width={1178} height={534} className="h-16 w-auto"/>
  </Link>
);

export default function Header() {
  const navLinks = [
    { name: 'About', href: '#about' },
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
              <SheetHeader className="p-6 pb-6">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Logo />
              </SheetHeader>
              <nav className="grid gap-6 text-lg font-medium">
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
