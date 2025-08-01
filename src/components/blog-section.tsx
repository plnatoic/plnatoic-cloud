import { BlogCard, BlogPost } from './blog-card';

const blogPosts: BlogPost[] = [
  {
    slug: 'ai-in-web-design',
    title: 'The Unseen Revolution: How AI is Redefining Web Design',
    excerpt: 'Explore the ways artificial intelligence is transforming the landscape of web design, from automated layouts to personalized user experiences.',
    category: 'AI & ML',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'abstract technology',
    author: 'Jane Doe',
    authorAvatarUrl: 'https://placehold.co/40x40.png',
  },
  {
    slug: 'nextjs-15-features',
    title: 'Top 5 Features in Next.js 15 You Can\'t Ignore',
    excerpt: 'A deep dive into the latest version of Next.js and its new features that will change the way you develop.',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code editor',
    author: 'John Smith',
    authorAvatarUrl: 'https://placehold.co/40x40.png',
  },
  {
    slug: 'mastering-tailwind-css',
    title: 'From Utility-First to Design System',
    excerpt: 'Learn how to leverage the full power of Tailwind CSS to create a consistent and scalable design system.',
    category: 'CSS & Design',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'design patterns',
    author: 'Emily White',
    authorAvatarUrl: 'https://placehold.co/40x40.png',
  },
  {
    slug: 'the-rise-of-server-components',
    title: 'The Rise of React Server Components',
    excerpt: 'A look into the future of React and how Server Components will change how we build modern web applications.',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'server components',
    author: 'Michael Brown',
    authorAvatarUrl: 'https://placehold.co/40x40.png',
  },
   {
    slug: 'state-management-in-react',
    title: 'Modern State Management in React',
    excerpt: 'Comparing different state management libraries like Redux, Zustand, and Jotai for your next React project.',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data flow',
    author: 'Sarah Green',
    authorAvatarUrl: 'https://placehold.co/40x40.png',
  },
   {
    slug: 'introduction-to-genkit',
    title: 'Building AI Apps with Genkit',
    excerpt: 'An introductory guide to Google\'s Genkit and how you can use it to build powerful, production-ready AI applications.',
    category: 'AI & ML',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai development',
    author: 'David Chen',
    authorAvatarUrl: 'https://placehold.co/40x40.png',
  },
];

export function BlogSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-left max-w-2xl">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground font-body">
            Discover insightful resources and expert advice from our seasoned team to elevate your knowledge.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
