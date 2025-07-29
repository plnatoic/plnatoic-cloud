'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import ClientFormattedDate from './ClientFormattedDate';

interface BlogCardProps {
  imageUrl: string;
  category: string;
  title: string;
  dateString: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  imageUrl = 'https://i.pinimg.com/1200x/b8/20/50/b820509d7c346e2b617bb35718a4c3da.jpg', 
  category, 
  title, 
  dateString, 
  slug 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative w-full rounded-lg overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title}
            fill
            className={`transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {title}
          </h3>

          {/* Date */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <ClientFormattedDate dateString={dateString} />
          </div>

          {/* Action Button */}
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href={`/blog/${slug}`} 
              className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
