'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const sanctuaryPosts = [
  {
    title: 'On Finding Stillness',
    content: "In the chaos of modern life, finding a moment of stillness is not a luxury, but a necessity. It's in these quiet moments that we can truly hear ourselves think and reconnect with our inner world.",
  },
  {
    title: 'The Philosophy of Simple Things',
    content:
      "There's a profound beauty in simplicity. A warm cup of tea, the sound of rain, a clean workspace. These small, simple things are the bedrock of a peaceful and contented life.",
  },
  {
    title: 'Cultivating a Digital Garden',
    content:
      'Think of your personal space on the web not as a resume, but as a garden. It requires care, and tending, and over time, it grows into a beautiful reflection of your thoughts and learning.',
  },
  {
    title: 'The Art of Listening',
    content:
      'We spend so much time waiting for our turn to speak that we often forget to truly listen. Active listening is a skill that deepens connection and fosters genuine understanding.',
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
              <CardHeader>
                <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
