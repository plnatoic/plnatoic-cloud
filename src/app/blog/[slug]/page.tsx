import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import ClientFormattedDate from '@/components/ClientFormattedDate';
import Image from 'next/image';

// This function fetches the data for a single post from our API
async function getPost(slug: string) {
  // We need to construct the absolute URL for fetching on the server
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
    // Revalidate the data every hour to keep it fresh
    next: { revalidate: 3600 },
  });

  // If the post is not found, show the 404 page
  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    // Handle other errors
    throw new Error('Failed to fetch post');
  }

  return res.json();
}

// This is the main page component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <article className="max-w-4xl mx-auto py-8 px-4 bg-gray-900 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">{post.title}</h1>
            <p className="text-gray-400 mb-8 text-center">Published on <ClientFormattedDate dateString={post.created_at} /></p>
      
      {post.image_url && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image_url}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority // Prioritize loading the main blog image
          />
        </div>
      )}

      {/* This is where the markdown content is rendered */}
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}

// This function helps Next.js know which blog post pages to pre-build
export async function generateStaticParams() {
    const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';

    try {
      const res = await fetch(`${baseUrl}/api/posts`);
      const data = await res.json();
      // The API returns { posts: [...] }
      const posts = data.posts || [];
      return posts.map((post: { slug: string }) => ({
        slug: post.slug,
      }));
    } catch (error) {
      console.error('Failed to fetch posts for generateStaticParams:', error);
      return []; // Return empty array on error
    }
}
