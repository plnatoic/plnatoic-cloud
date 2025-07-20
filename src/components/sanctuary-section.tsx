'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const sanctuaryPosts = [
  {
    title: 'On Finding Stillness',
    content: "In the chaos of modern life, finding a moment of stillness is not a luxury, but a necessity. It's in these quiet moments that we can truly hear ourselves think and reconnect with our inner world.",
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'zen garden',
  },
  {
    title: 'The Philosophy of Simple Things',
    content:
      "There's a profound beauty in simplicity. A warm cup of tea, the sound of rain, a clean workspace. These small, simple things are the bedrock of a peaceful and contented life.",
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'tea cup',
  },
  {
    title: 'Cultivating a Digital Garden',
    content:
      'Think of your personal space on the web not as a resume, but as a garden. It requires care, and tending, and over time, it grows into a beautiful reflection of your thoughts and learning.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'laptop nature',
  },
  {
    title: 'The Art of Listening',
    content:
      'We spend so much time waiting for our turn to speak that we often forget to truly listen. Active listening is a skill that deepens connection and fosters genuine understanding.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'human ear',
  },
];

export default function SanctuarySection() {
  return (
    <section id="sanctuary" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Sanctuary</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            A quiet corner for thoughts, reflections, and ideas.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {sanctuaryPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out">
              <div className="aspect-video overflow-hidden border-b">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    data-ai-hint={post.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
