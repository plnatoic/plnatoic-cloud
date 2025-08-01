import { GenerateExcerptForm } from "./generate-excerpt-form";
import { Sparkles } from "lucide-react";

export default function GenerateExcerptPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
        <div className="text-center mb-12">
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold font-headline">
                AI-Powered Excerpt Generator
            </h1>
            <p className="mt-4 text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Simply paste your blog post content below, and our AI will craft a concise and engaging excerpt for you. Perfect for summaries, social media posts, and more.
            </p>
        </div>
      <GenerateExcerptForm />
    </div>
  );
}
