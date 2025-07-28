import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  codeUrl: string;
  aiHint: string;
}

export default function ProjectCard({ title, description, imageUrl, liveUrl, codeUrl, aiHint }: ProjectCardProps) {
  return (
    <Card className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-slate-300 dark:border-slate-800/60 dark:bg-black/50 dark:hover:border-slate-700">
      <CardHeader className="z-10">
        <CardTitle className="font-headline text-slate-800 dark:text-slate-100">{title}</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow z-10">
         <div className="aspect-video overflow-hidden rounded-lg border dark:border-slate-800">
            <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={aiHint}
            />
        </div>
      </CardContent>
      <CardFooter className="z-10 flex justify-end gap-3 pt-4">
        <Button asChild variant="outline" className="rounded-full border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors shadow-sm">
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </Link>
        </Button>
        <Button asChild className="rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 transition-colors shadow-sm">
          <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Code className="mr-2 h-4 w-4" /> Source Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
