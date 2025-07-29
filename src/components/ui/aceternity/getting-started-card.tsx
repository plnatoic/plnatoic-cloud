"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GettingStartedCardProps {
  className?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  onClick?: () => void;
}

export function GettingStartedCard({
  className,
  title = "Ready to get started?",
  description = "Kick-start your next project in minutes with Platoic Cloud.",
  ctaLabel = "Get Started",
  onClick,
}: GettingStartedCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "relative isolate w-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 shadow-md transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:shadow-emerald-400/10",
        className
      )}
    >
      {/* Glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute inset-[-2px] rounded-[inherit] bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-500 opacity-0 blur-2xl"
      />

      <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 max-w-prose text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <button
        onClick={onClick}
        className="mt-6 inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-600"
      >
        {ctaLabel}
      </button>
    </motion.div>
  );
}
