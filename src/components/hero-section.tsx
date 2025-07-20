'use client';

import { useState } from 'react';
import { BrainCircuit, Loader2 } from 'lucide-react';
import { getSummary } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const aboutMeText = `A passionate and creative full-stack developer with a knack for building beautiful, user-friendly, and performant web applications. With experience in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment. I'm a lifelong learner, always excited to explore new technologies and improve my craft. When I'm not coding, I enjoy hiking, photography, and exploring new coffee shops.`;

const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase', 'GraphQL', 'Docker'];

export default function HeroSection() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');
    const result = await getSummary(aboutMeText);
    setIsLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      setSummary(result.summary ?? '');
    }
  };

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 dark:bg-card">
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
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
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              AI-Powered Summary
            </CardTitle>
            <CardDescription>Click the button to generate a summary of the about section using AI.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {isLoading && (
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Generating...</span>
              </div>
            )}
            {error && <p className="text-destructive">{error}</p>}
            {summary && <p className="italic">{summary}</p>}
          </CardContent>
          <div className="p-6 pt-0">
            <Button onClick={handleGenerateSummary} disabled={isLoading} className="w-full bg-accent hover:bg-accent/90">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <BrainCircuit className="mr-2 h-4 w-4" />
              )}
              Generate Summary
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
