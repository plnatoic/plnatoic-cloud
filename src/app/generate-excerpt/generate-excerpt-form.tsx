"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { handleGenerateExcerpt } from "./actions";

const FormSchema = z.object({
  blogPostContent: z.string().min(50, {
    message: "Blog post content must be at least 50 characters to generate a good excerpt.",
  }).max(10000, {
    message: "Blog post content cannot exceed 10,000 characters."
  }),
});

export function GenerateExcerptForm() {
  const [generatedExcerpt, setGeneratedExcerpt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      blogPostContent: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setGeneratedExcerpt(null);

    const formData = new FormData();
    formData.append("blogPostContent", data.blogPostContent);

    const result = await handleGenerateExcerpt(formData);

    if (result.success) {
      setGeneratedExcerpt(result.excerpt);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }

    setIsLoading(false);
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="blogPostContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-headline text-lg">Blog Post Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your full blog post here..."
                        className="min-h-[250px] font-body text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} variant="accent" size="lg" className="font-headline">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Excerpt
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      {generatedExcerpt && (
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2 text-primary">
              <Sparkles className="h-5 w-5" />
              AI-Generated Excerpt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-body text-lg leading-relaxed">{generatedExcerpt}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
