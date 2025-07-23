import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BlogCard from '@/components/BlogCard';
import Pagination from '@/components/Pagination';

const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Website heading
                <br />
                goes here
              </h1>
              <div className="mt-8 flex space-x-4">
                <Button className="rounded-md px-8 py-3 text-sm font-semibold">Explore</Button>
                <Button variant="outline" className="rounded-md px-8 py-3 text-sm font-semibold">Create</Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-2/5 flex justify-center lg:justify-end">
              <div className="bg-blue-600 rounded-2xl p-4 w-full max-w-xs shadow-lg text-white transform rotate-3">
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  {/* Using a placeholder image for the cat */}
                  <Image
                    src="/image.png" // Đường dẫn đúng
                    alt="Featured Cat"
                    layout="fill"
                    objectFit="cover"
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
            {
              [
                { imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Company', title: 'Reprehenderit laboris labore except', date: 'Oct 19, 2022' },
                { imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Product News', title: 'Ut labore elit incididunt incididunt', date: 'Oct 19, 2022' },
                { imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Company', title: 'Veniam nostrud nostrud sint nis', date: 'Oct 19, 2022' },
                { imageUrl: 'https://images.unsplash.com/photo-1559028006-44a3a2f209e5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Product News', title: 'Ut labore elit incididunt incididunt', date: 'Oct 19, 2022' },
                { imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Trends', title: 'Veniam nostrud nostrud sint nis', date: 'Oct 19, 2022' },
                { imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a15955627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Product News', title: 'Ut labore elit incididunt incididunt', date: 'Oct 19, 2022' },
              ].map((post, index) => (
                <BlogCard key={index} {...post} />
              ))
            }
          </div>
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
