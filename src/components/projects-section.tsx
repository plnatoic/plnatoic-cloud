import ProjectCard from './project-card';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site built with Next.js, Stripe for payments, and a custom CMS for product management.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    codeUrl: '#',
    aiHint: 'online shopping'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates using Firebase, featuring drag-and-drop functionality.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    codeUrl: '#',
    aiHint: 'to do list'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, built with D3.js and React, offering various chart types.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    codeUrl: '#',
    aiHint: 'charts graphs'
  },
   {
    title: 'Personal Blog',
    description: 'A statically generated blog using Next.js and MDX, focusing on performance and a clean reading experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    codeUrl: '#',
    aiHint: 'writing desk'
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Here are some of the projects I've worked on.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
