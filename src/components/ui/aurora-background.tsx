"use client";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Component Boxes từ code bạn cung cấp
export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "#93c5fd",
    "#f9a8d4",
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-slate-700"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-slate-700"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

// Component BackgroundBoxes
interface BackgroundBoxesProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  containerClassName?: string;
  matchHeaderWidth?: boolean;
}

export const BackgroundBoxes = ({
  className,
  containerClassName,
  children,
  matchHeaderWidth = true,
  ...props
}: BackgroundBoxesProps) => {
  return (
    <div className={cn(
      "relative mx-auto", 
      // Nếu matchHeaderWidth=true, sử dụng max-w-7xl để khớp với header
      matchHeaderWidth && "w-full max-w-7xl px-4 sm:px-6 lg:px-8",
      containerClassName
    )}>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900",
          "shadow-md",
          className
        )}
        {...props}
      >
        {/* Background boxes */}
        <div className="absolute inset-0 overflow-hidden opacity-40 dark:opacity-60">
          <Boxes />
        </div>
        
        {/* Overlay để làm mờ nền và tăng độ tương phản */}
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-[2px]"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

// Ví dụ sử dụng với header và footer
export const FullPageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-950 shadow-sm z-50 h-16 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="font-bold text-xl">Logo</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-800 dark:hover:text-blue-400">Home</a>
            <a href="#" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-800 dark:hover:text-blue-400">Features</a>
            <a href="#" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-800 dark:hover:text-blue-400">Pricing</a>
            <a href="#" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-800 dark:hover:text-blue-400">About</a>
          </nav>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow py-6 flex justify-center">
        <BackgroundBoxes 
          className="p-8 sm:p-12 md:p-16"
          matchHeaderWidth={true}
        >
          <div className="flex items-center justify-center w-full flex-col">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Sanjana Airlines, <br /> Sajana Textiles.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
              Get the best advices from our experts, including expert artists,
              painters, marathon enthusiasts and RDX, totally free.
            </p>
          </div>
        </BackgroundBoxes>
      </main>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">About</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Features</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Documentation</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Guides</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Privacy</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Terms</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-800 dark:hover:text-blue-400">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-600 dark:text-zinc-400 text-sm">
            © {new Date().getFullYear()} Sanjana Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Demo component với nền Boxes
export function BackgroundBoxesDemo() {
  return (
    <BackgroundBoxes 
      className="flex items-center justify-center w-full flex-col px-4 py-12"
      matchHeaderWidth={true}
    >
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Sanjana Airlines, <br /> Sajana Textiles.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
    </BackgroundBoxes>
  );
}