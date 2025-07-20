import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink } from 'lucide-react';

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
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
         <div className="aspect-video overflow-hidden rounded-lg border">
            <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                data-ai-hint={aiHint}
            />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button asChild variant="outline">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </a>
        </Button>
        <Button asChild>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Code className="mr-2 h-4 w-4" /> Source Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
