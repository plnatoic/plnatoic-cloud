"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string; label: string; }) => (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        className={cn(
          "h-10 font-headline text-base transition-all duration-300 group-hover:px-3",
          "px-5 hover:bg-transparent",
          pathname === href ? "text-primary" : "text-foreground/80 hover:text-foreground"
        )}
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Button>
    </Link>
  );

  return (
    <header className="relative z-10 flex justify-center py-2 group px-6">
      <div className="w-full max-w-6xl mx-auto rounded-full transition-all duration-300 group-hover:bg-background/80 group-hover:border group-hover:border-primary/20 group-hover:shadow-lg group-hover:backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center" passHref>
            <Image src="/images/image-removebg-preview.png" width={110} height={28} alt="Plantoic Logo" data-ai-hint="logo" />
          </Link>
          <nav className="hidden items-center gap-1 transition-all duration-300 group-hover:gap-0 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
              <Link href="/generate-excerpt" passHref>
                <Button variant="default" className="font-headline rounded-full h-10 px-6 text-base">
                  Get All-Access
                </Button>
              </Link>
          </nav>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col items-start gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 mb-4" passHref>
                    <Image src="/images/image-removebg-preview.png" width={140} height={32} alt="Plantoic Logo" data-ai-hint="logo" />
                  </Link>
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                   <Link href="/generate-excerpt" passHref>
                      <Button variant="default" className="font-headline w-full rounded-full">
                          Get All-Access
                      </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
