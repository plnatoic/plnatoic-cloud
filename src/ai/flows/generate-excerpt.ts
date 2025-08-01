'use server';
/**
 * @fileOverview A flow that generates engaging excerpts for blog posts.
 *
 * - generateExcerpt - A function that generates an excerpt for a blog post.
 * - GenerateExcerptInput - The input type for the generateExcerpt function.
 * - GenerateExcerptOutput - The return type for the generateExcerpt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExcerptInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The content of the blog post to generate an excerpt for.'),
});
export type GenerateExcerptInput = z.infer<typeof GenerateExcerptInputSchema>;

const GenerateExcerptOutputSchema = z.object({
  excerpt: z.string().describe('The generated excerpt for the blog post.'),
});
export type GenerateExcerptOutput = z.infer<typeof GenerateExcerptOutputSchema>;

export async function generateExcerpt(input: GenerateExcerptInput): Promise<GenerateExcerptOutput> {
  return generateExcerptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateExcerptPrompt',
  input: {schema: GenerateExcerptInputSchema},
  output: {schema: GenerateExcerptOutputSchema},
  prompt: `You are an expert content writer specializing in creating engaging excerpts for blog posts.

  Generate a short, attention-grabbing excerpt that summarizes the key points of the following blog post content.

  Blog Post Content: {{{blogPostContent}}}
  `,
});

const generateExcerptFlow = ai.defineFlow(
  {
    name: 'generateExcerptFlow',
    inputSchema: GenerateExcerptInputSchema,
    outputSchema: GenerateExcerptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
