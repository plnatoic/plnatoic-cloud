'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import AIToolsMarquee from './ai-tools-marquee';

const aboutMeText = `I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that enhance usability.`;

export default function HeroSection() {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 lg:py-40 bg-white dark:bg-black">
      <div className="absolute top-0 left-0 h-full w-full bg-white dark:bg-black bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"></div>
      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <span className="font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">Welcome to my world</span>
          <h1 className="text-4xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 sm:text-5xl md:text-6xl">
            Hi, I'm Platonic Area
            <span className="block text-slate-700 dark:text-slate-300 text-3xl sm:text-4xl md:text-5xl">a Professional Coder.</span>
          </h1>
          <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed">
            {aboutMeText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
             <Button asChild size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 transition-colors shadow-lg">
                <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors shadow-lg">
                <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-xl opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative h-[450px] w-[350px] rounded-lg bg-white dark:bg-slate-900 p-2 shadow-2xl">
                     <Image
                        src="https://i.pinimg.com/564x/2b/0f/d9/2b0fd9ea7a238032593aa16a617a5a8a.jpg"
                        alt="Portrait of Platonic Area"
                        width={350}
                        height={450}
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </div>
      </div>
            <div className="relative z-10 mt-16 md:mt-24">
        <AIToolsMarquee />
      </div>
    </section>
  );
}
