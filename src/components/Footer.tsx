
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="flex flex-col items-center text-center">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image src="/images/image-removebg-preview.png" width={140} height={32} alt="Plantoic Logo" data-ai-hint="logo" />
            </Link>
            <p className="font-headline font-semibold text-lg md:text-xl max-w-xl">
              Stay ahead of the curve. Join our newsletter for the latest AI insights and tool reviews.
            </p>
            <form className="mt-6 flex w-full max-w-md gap-2">
              <Input type="email" placeholder="Enter your email" className="font-body flex-1" />
              <Button type="submit" variant="default" className="font-headline">
                Subscribe
              </Button>
            </form>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-4">
                 <Link href="#" passHref>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary-foreground hover:bg-primary">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Button>
                 </Link>
                <Link href="#" passHref>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary-foreground hover:bg-primary">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Button>
                </Link>
                <Link href="#" passHref>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary-foreground hover:bg-primary">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Button>
                </Link>
            </div>
             <p className="font-body text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Plantoic. All rights reserved.
             </p>
        </div>
      </div>
    </footer>
  );
}
