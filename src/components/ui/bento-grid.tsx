"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  content,
  header,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  content?: React.ReactNode;
  header?: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "row-span-1 rounded-xl group/bento-item transition duration-200 shadow-input dark:shadow-none bg-background border border-transparent justify-between flex flex-col space-y-4",
        "hover:shadow-xl",
        className
      )}
    >
      {header}
      <div className="group-hover/bento-item:translate-x-2 transition duration-200 flex-grow">
        {content}
      </div>
    </Link>
  );
};
