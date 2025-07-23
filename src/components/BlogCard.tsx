import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
  imageUrl: string;
  category: string;
  title: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl = 'https://i.pinimg.com/1200x/b8/20/50/b820509d7c346e2b617bb35718a4c3da.jpg', category, title, date }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-blue-600 mb-2">{category}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-4 h-14">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
