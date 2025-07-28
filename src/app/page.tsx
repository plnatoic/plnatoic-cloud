import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import Pagination from '@/components/Pagination';
import { fetchPaginatedPosts } from '@/lib/data';

// Define the expected shape of searchParams
interface HomePageProps {
  searchParams?: {
    page?: string;
  };
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  // Đảm bảo searchParams được await nếu là Promise
  const params = (searchParams && typeof (searchParams as any).then === 'function')
    ? await (searchParams as any)
    : searchParams;
  const page = params?.page ?? '1';
  const currentPage = Number(page);
  const { posts, totalPages } = await fetchPaginatedPosts(currentPage);

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="rounded-2xl bg-gradient-to-br from-white via-blue-50 to-gray-100 shadow-xl p-8 md:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
                  AI-Powered
                </span>
                <br />
                Solutions, Instantly.
              </h1>
              <div className="mt-8 flex space-x-4">
                <Button className="rounded-md px-8 py-3 text-sm font-semibold">Explore</Button>
                <Button variant="outline" className="rounded-md px-8 py-3 text-sm font-semibold">Create</Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-2/5 hidden lg:flex justify-center lg:justify-end">
              <div className="bg-blue-600 rounded-2xl p-4 w-full max-w-xs shadow-lg text-white transform rotate-3">
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/image.png" // Placeholder image
                    alt="Featured Cat"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Nhat</p>
                    <p className="text-sm text-blue-200">Blog</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl">11.98</p>
                    <p className="text-sm text-blue-200">Last: 0.99</p>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <svg className="w-4 h-4 text-blue-300 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  <span className="text-sm text-blue-200">352</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.id}
                className="block animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard
                  title={post.title}
                                    dateString={post.created_at}
                  slug={post.slug}
                  // Using placeholders as these are not in the DB
                  category="Blog"
                  imageUrl={post.image_url || 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
