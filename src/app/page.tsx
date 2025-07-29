import Header from '@/components/header';
import { fetchPaginatedPosts } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import HeroGettingStarted from '@/components/ui/aceternity/hero-getting-started';

import { BentoGrid, BentoGridItem } from '@/components/ui/aceternity/bento-grid';
import { CardBody, CardContainer, CardItem } from '@/components/ui/aceternity/three-d-card';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';

interface HomePageProps {
  searchParams?: { page?: string };
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  const currentPage = Number(searchParams?.page || '1');
  const { posts } = await fetchPaginatedPosts(currentPage);

  const items = [
    {
      title: 'The Dawn of Innovation',
      description: 'Explore the birth of groundbreaking ideas and inventions.',
      header: <Skeleton />,
      className: 'md:col-span-2',
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'The Art of Clean Code',
      description: 'Dive into the principles of writing maintainable and scalable code.',
      header: <Skeleton />,
      className: 'md:col-span-1',
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'The Power of Storytelling',
      description: 'Understand the impact of narrative in design and development.',
      header: <Skeleton />,
      className: 'md:col-span-1',
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'Automated Workflows',
      description: 'Build and automate your workflows with cutting-edge technology.',
      header: <Skeleton />,
      className: 'md:col-span-2',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <main className="bg-white dark:bg-black">
      <Header />
      <HeroGettingStarted />

      
      <div className="py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">Featured Insights</h2>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      </div>

    </main>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default HomePage;
