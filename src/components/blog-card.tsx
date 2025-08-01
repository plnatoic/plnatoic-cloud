import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  author: string;
  authorAvatarUrl: string;
};


export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="relative h-48 w-full">
            <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={post.imageHint}
            />
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.authorAvatarUrl} alt={post.author} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="font-body text-sm text-muted-foreground">{post.author}</span>
          </div>
          <h3 className="font-headline text-xl font-bold mb-2">
            {post.title}
          </h3>
          <p className="font-body text-muted-foreground text-sm flex-grow">
            {post.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
