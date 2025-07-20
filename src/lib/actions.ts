'use server'

import { summarizeAboutMe } from '@/ai/flows/summarize-about-me'

export async function getSummary(aboutMeText: string) {
  try {
    const result = await summarizeAboutMe({ aboutMeText })
    return { summary: result.summary, error: null }
  } catch (error) {
    console.error('Error generating summary:', error)
    return { summary: null, error: 'Failed to generate summary. Please try again later.' }
  }
}
