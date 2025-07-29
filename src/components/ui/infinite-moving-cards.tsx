"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InfiniteMovingCardsProps {
  items: { icon: string; alt?: string }[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    
    // Xóa tất cả các phần tử con hiện có
    while (scrollerRef.current.firstChild) {
      scrollerRef.current.removeChild(scrollerRef.current.firstChild);
    }
    
    // Thêm các phần tử gốc
    items.forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = "w-auto flex-shrink-0 mx-4";
      li.setAttribute('key', `${item.alt || 'icon'}-${idx}`);
      
      const img = document.createElement('img');
      img.src = item.icon;
      img.alt = item.alt || "AI model icon";
      img.className = "h-12 w-auto object-contain";
      
      li.appendChild(img);
      scrollerRef.current?.appendChild(li);
    });
    
    // Tính toán tổng chiều rộng của tất cả các phần tử
    const scrollerWidth = scrollerRef.current.scrollWidth;
    const containerWidth = containerRef.current.clientWidth;
    
    // Nhân bản các phần tử cho đến khi đủ để tạo hiệu ứng vô hạn
    const itemsToAdd = Math.ceil((containerWidth * 3) / scrollerWidth) + 1;
    
    for (let i = 0; i < itemsToAdd; i++) {
      items.forEach((item, idx) => {
        const li = document.createElement('li');
        li.className = "w-auto flex-shrink-0 mx-4";
        li.setAttribute('key', `${item.alt || 'icon'}-${idx}-clone-${i}`);
        
        const img = document.createElement('img');
        img.src = item.icon;
        img.alt = item.alt || "AI model icon";
        img.className = "h-12 w-auto object-contain";
        
        li.appendChild(img);
        scrollerRef.current?.appendChild(li);
      });
    }
    
    // Thiết lập animation
    const speedValues = {
      slow: '80s',
      normal: '40s',
      fast: '20s'
    };
    
    containerRef.current.style.setProperty('--animation-duration', speedValues[speed]);
    containerRef.current.style.setProperty('--animation-direction', direction === 'left' ? 'forwards' : 'reverse');
    
    // Thêm style cho animation
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes scroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(calc(-50%));
        }
      }
      
      .animate-scroll {
        animation: scroll var(--animation-duration) linear infinite var(--animation-direction);
      }
    `;
    document.head.appendChild(styleElement);
    
    // Kích hoạt animation
    scrollerRef.current.classList.add('animate-scroll');
    
    return () => {
      // Dọn dẹp khi component unmount
      if (styleElement.parentNode) {
        document.head.removeChild(styleElement);
      }
    };
  }, [items, direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-4xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-0 py-4 w-max flex-nowrap items-center",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* Các phần tử sẽ được thêm vào bằng JavaScript */}
      </ul>
    </div>
  );
};

const aiModels = [
  { icon: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg", alt: "OpenAI" },
  { icon: "https://www.vectorlogo.zone/logos/anthropic/anthropic-icon.svg", alt: "Claude" },
  { icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_resting_v2_darkmode_2d96563e59ad0f1cfd05b7b4b66557c0.svg", alt: "Gemini" },
  { icon: "https://www.deepseek.com/favicon.ico", alt: "DeepSeek" },
  { icon: "https://www.perplexity.ai/favicon.ico", alt: "Perplexity" },
  { icon: "https://www.meta.com/favicon.ico", alt: "Meta AI" },
  { icon: "https://kimi.moonshot.cn/favicon.ico", alt: "Kimi" },
  { icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", alt: "Hugging Face" },
  { icon: "https://www.mistral.ai/favicon.ico", alt: "Mistral AI" },
  { icon: "https://www.cohere.com/favicon.ico", alt: "Cohere" },
  { icon: "https://www.anthropic.com/favicon.ico", alt: "Anthropic" },
  { icon: "https://www.openai.com/favicon.ico", alt: "OpenAI" },
  { icon: "https://www.elevenlabs.io/favicon.ico", alt: "ElevenLabs" },
  { icon: "/images/llama-icon.svg", alt: "Llama" },
  { icon: "/images/mistral-icon.svg", alt: "Mistral" },
  { icon: "/images/bard-icon.svg", alt: "Bard" },
  { icon: "/images/gpt4-icon.svg", alt: "GPT-4" },
  { icon: "/images/dall-e-icon.svg", alt: "DALL-E" },
  { icon: "/images/midjourney-icon.svg", alt: "Midjourney" },
  { icon: "/images/stable-diffusion-icon.svg", alt: "Stable Diffusion" },
];

// Trong component của bạn
<InfiniteMovingCards items={aiModels} speed="normal" direction="left" />