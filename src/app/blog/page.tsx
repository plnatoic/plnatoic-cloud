import type { Metadata } from 'next';
import { BlogSection } from '@/components/blog-section';
import { CategorySection } from '@/components/category-section';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest blog posts.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
      <CategorySection />
      <BlogSection />
    </div>
  );
}
