'use client';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import Link from 'next/link';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0L40 10V30L20 40L0 30V10L20 0Z" fill="hsl(var(--primary))"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="20" fontFamily="sans-serif" dy=".1em">P</text>
  </svg>
);


export default function Header() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-2">
           <Logo />
          <span className="text-xl font-bold">Platonic Area</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                </Link>
            ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="default">Login</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
