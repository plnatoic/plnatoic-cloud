'use client';

import { Badge } from '@/components/ui/badge';

const aboutMeText = `A passionate and creative full-stack developer with a knack for building beautiful, user-friendly, and performant web applications. With experience in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment. I'm a lifelong learner, always excited to explore new technologies and improve my craft. When I'm not coding, I enjoy hiking, photography, and exploring new coffee shops.`;

const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase', 'GraphQL', 'Docker'];

export default function HeroSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 dark:bg-card">
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:gap-12">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {aboutMeText}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
