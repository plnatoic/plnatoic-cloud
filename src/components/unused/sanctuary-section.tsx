'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const sanctuaryPosts = [
  {
    title: 'On Finding Stillness',
    content: "In the chaos of modern life, finding a moment of stillness is not a luxury, but a necessity. It's in these quiet moments that we can truly hear ourselves think and reconnect with our inner world.",
    imageUrl: 'https://i.pinimg.com/564x/e7/6c/3c/e76c3c623a3cb34b4b265b7568575a7c.jpg',
    aiHint: 'zen garden',
  },
  {
    title: 'The Philosophy of Simple Things',
    content:
      "There's a profound beauty in simplicity. A warm cup of tea, the sound of rain, a clean workspace. These small, simple things are the bedrock of a peaceful and contented life.",
    imageUrl: 'https://i.pinimg.com/564x/0e/c6/3a/0ec63a40332255e534552955f32497e5.jpg',
    aiHint: 'tea cup',
  },
  {
    title: 'Cultivating a Digital Garden',
    content:
      'Think of your personal space on the web not as a resume, but as a garden. It requires care, and tending, and over time, it grows into a beautiful reflection of your thoughts and learning.',
    imageUrl: 'https://i.pinimg.com/564x/c9/7a/f8/c97af859b85a7b03c15b1191071375d3.jpg',
    aiHint: 'laptop nature',
  },
  {
    title: 'The Art of Listening',
    content:
      'We spend so much time waiting for our turn to speak that we often forget to truly listen. Active listening is a skill that deepens connection and fosters genuine understanding.',
    imageUrl: 'https://i.pinimg.com/564x/8a/0f/c2/8a0fc293c6f817953fe1964f43c834f8.jpg',
    aiHint: 'human ear',
  },
];

export default function SanctuarySection() {
  return (
    <section id="sanctuary" className="relative w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="absolute inset-0 h-full w-full bg-white dark:bg-black bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"></div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl">My Sanctuary</h2>
          <p className="mx-auto max-w-[700px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed mt-4">
            A quiet corner for thoughts, reflections, and ideas.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {sanctuaryPosts.map((post) => (
            <Card key={post.title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:border-slate-300 dark:border-slate-800/60 dark:bg-black/50 dark:hover:border-slate-700">
              <div className="aspect-video overflow-hidden">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    data-ai-hint={post.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-slate-800 dark:text-slate-100">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-600 dark:text-slate-400">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
