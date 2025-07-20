'use client';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Logo = () => (
  <Link href="#" className="flex items-center gap-2" aria-label="Platoic Home">
    <svg
      className="h-8 w-auto text-foreground"
      viewBox="0 0 250 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.5,5 C10,5,5,15,5,25 C5,35,10,40,22.5,40 C35,40,40,30,40,20 C40,10,35,5,22.5,5 Z M22.5,10 C30,10,35,15,35,20 C35,25,30,35,22.5,35 C15,35,10,30,10,25 C10,20,15,10,22.5,10 Z" transform="translate(0, -5)" />
      <path d="M0,0 H10 V40 H0 Z" transform="translate(50, -5)" />
      <path d="M82.5,20 C70,20,65,30,65,35 C65,40,70,45,82.5,45 C95,45,100,35,100,25 C100,15,95,20,82.5,20 Z M82.5,25 C90,25,95,30,95,35 C95,40,90,40,82.5,40 C75,40,70,35,70,30 C70,25,75,25,82.5,25 Z" transform="translate(0, -5)" />
      <path d="M110,5 H120 V20 H135 V30 H120 V45 H110 V30 H105 V20 H110 Z" transform="translate(10, -5)" />
      <path d="M162.5,20 C155,20,150,25,150,30 C150,35,155,40,162.5,40 C170,40,175,35,175,30 C175,25,170,20,162.5,20 Z" transform="translate(0, -5)" />
      <path d="M192.5,20 C185,20,180,25,180,30 C180,35,185,40,192.5,40 C200,40,205,35,205,30 C205,25,200,20,192.5,20 Z M192.5,25 C195,25,200,27.5,200,30 C200,32.5,195,35,192.5,35 C190,35,185,32.5,185,30 C185,27.5,190,25,192.5,25 Z" transform="translate(0, -5)" />
      <path d="M215,35 C215,25,220,20,230,20 C240,20,245,25,245,35 C245,45,240,50,230,50 C220,50,215,45,215,35 Z M220,35 C220,40,225,45,230,45 C235,45,240,40,240,35 C240,30,235,25,230,25 C225,25,220,30,220,35 Z" transform="translate(0, -10)" />
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
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-16">
                <div className="px-6">
                  <Logo />
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground px-6"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
