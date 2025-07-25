'use client';

import Image from 'next/image';

const aboutMeText = `I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.`;

export default function HeroSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-4">
          <span className="font-medium uppercase tracking-wider text-muted-foreground">Welcome to my world</span>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hi, I&apos;m Platonic Area
            <span className="block text-primary">a Professional Coder.</span>
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            {aboutMeText}
          </p>
        </div>
        <div className="flex justify-center">
            <div className="relative h-[450px] w-[350px] rounded-lg border-8 border-card bg-card shadow-2xl">
                 <Image
                    src="https://placehold.co/350x450.png"
                    alt="Portrait of Platonic Area"
                    width={350}
                    height={450}
                    className="h-full w-full rounded-md object-cover"
                    data-ai-hint="man portrait"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
