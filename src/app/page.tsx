import { IconCloud } from "@/components/icon-cloud";
import { BlogSection } from "@/components/blog-section";
import { CategorySection } from "@/components/category-section";
import { GridBackground } from "@/components/grid-background";
import { ResourcesBank } from "@/components/resources-bank";

const slugs = [
  "canva",
  "notion",
  "discord",
  "figma",
  "github",
  "trello",
  "slack",
  "zoom",
  "microsoftteams",
  "chatgpt",
  "googlebard",
  "midjourney",
  "dalle",
  "synthesia",
  "elevenlabs",
  "grammarly",
  "notionai",
  "copilot",
  "deepmind",
  "replicate"
];

export default function Home() {
  return (
    <>
      <section className="relative w-full max-w-6xl mx-auto py-24 md:py-32 lg:py-40 bg-background">
        <GridBackground />
        <div className="relative z-10 container mx-auto px-4 md:px-6 grid lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight max-w-2xl mx-auto lg:mx-0">
              Khám phá những công cụ AI tốt nhất để{" "}
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                sáng tạo và làm việc
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground font-body">
              Chúng tôi tổng hợp và đánh giá những công cụ AI hàng đầu, giúp bạn tìm thấy giải pháp hoàn hảo cho mọi nhu cầu.
            </p>
          </div>
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </section>
      <CategorySection />
      <ResourcesBank />
      <BlogSection />
    </>
  );
}
