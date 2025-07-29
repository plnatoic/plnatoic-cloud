'use client';

import React from 'react';

const AIToolsMarquee = () => {
  const aiTools = [
    { name: 'ChatGPT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Midjourney', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'DALL-E 2', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Stable Diffusion', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'GitHub Copilot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Notion AI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 py-4 group">
      <div className="flex w-max animate-marquee-ltr group-hover:pause">
        {/* Render the list of tools twice for a seamless loop */}
        {[...aiTools, ...aiTools].map((tool, index) => (
          <div key={`marquee-item-${index}`} className="flex-shrink-0 w-40 mx-4 flex items-center justify-center">
            <img src={tool.logo} alt={tool.name} className="max-h-10 max-w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIToolsMarquee;
