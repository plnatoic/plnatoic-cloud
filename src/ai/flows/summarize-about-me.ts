// SummarizeAboutMe Story - Implemented Genkit flow for AI-powered summarization of the 'About Me' section.

'use server';

/**
 * @fileOverview A flow to summarize the About Me section of a portfolio website.
 *
 * - summarizeAboutMe - A function that summarizes the About Me section.
 * - SummarizeAboutMeInput - The input type for the summarizeAboutMe function.
 * - SummarizeAboutMeOutput - The return type for the summarizeAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAboutMeInputSchema = z.object({
  aboutMeText: z.string().describe('The About Me section text to summarize.'),
});
export type SummarizeAboutMeInput = z.infer<typeof SummarizeAboutMeInputSchema>;

const SummarizeAboutMeOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the About Me section.'),
});
export type SummarizeAboutMeOutput = z.infer<typeof SummarizeAboutMeOutputSchema>;

export async function summarizeAboutMe(input: SummarizeAboutMeInput): Promise<SummarizeAboutMeOutput> {
  return summarizeAboutMeFlow(input);
}

const summarizeAboutMePrompt = ai.definePrompt({
  name: 'summarizeAboutMePrompt',
  input: {schema: SummarizeAboutMeInputSchema},
  output: {schema: SummarizeAboutMeOutputSchema},
  prompt: `Summarize the following About Me section in a concise and compelling way:\n\n{{aboutMeText}}`,
});

const summarizeAboutMeFlow = ai.defineFlow(
  {
    name: 'summarizeAboutMeFlow',
    inputSchema: SummarizeAboutMeInputSchema,
    outputSchema: SummarizeAboutMeOutputSchema,
  },
  async input => {
    const {output} = await summarizeAboutMePrompt(input);
    return output!;
  }
);
