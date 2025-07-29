"use client";
import { motion } from "framer-motion";


import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const chatbotLogos = [
  { icon: "https://icon.horse/icon/openai.com", alt: "ChatGPT" },
  { icon: "https://icon.horse/icon/gemini.google.com", alt: "Gemini" },
  { icon: "https://icon.horse/icon/claude.ai", alt: "Claude" },
  { icon: "https://icon.horse/icon/copilot.microsoft.com", alt: "Copilot" },
  { icon: "https://icon.horse/icon/perplexity.ai", alt: "Perplexity" },
  { icon: "https://icon.horse/icon/poe.com", alt: "Poe" },
  { icon: "https://icon.horse/icon/meta.ai", alt: "Meta AI" },
  { icon: "https://icon.horse/icon/midjourney.com", alt: "Midjourney" },
];

import { BackgroundBoxes } from "@/components/ui/aurora-background";

export default function HeroGettingStarted() {
  return (
    <BackgroundBoxes>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="relative isolate mx-auto w-full max-w-6xl py-24 px-4 md:px-8">


      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-8 text-center text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        Your best in class <br />
        <span className="bg-gradient-to-r from-indigo-500 to-sky-600 bg-clip-text text-transparent">
          design and development studio
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto mt-6 max-w-2xl text-center text-base text-gray-600"
      >
        We provide the best in class design and development services for teams
        that ship with the speed of light.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center"
      >
        <button className="rounded-md bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          Book a call
        </button>
      </motion.div>

      {/* Trusted brands */}
      <div className="mt-16">
        <InfiniteMovingCards
          items={chatbotLogos}
          direction="right"
          speed="fast"
        />
      </div>
        </div>
      </motion.div>
    </BackgroundBoxes>
  );
}
