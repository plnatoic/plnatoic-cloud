"use server";

import { generateExcerpt, GenerateExcerptInput } from "@/ai/flows/generate-excerpt";
import { z } from "zod";

const FormSchema = z.object({
  blogPostContent: z.string().min(50, {
    message: "Blog post content must be at least 50 characters.",
  }),
});

export async function handleGenerateExcerpt(formData: FormData) {
  const rawFormData = {
    blogPostContent: formData.get("blogPostContent"),
  };

  const validatedFields = FormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Validation failed. Please check your input.",
    };
  }

  try {
    const result = await generateExcerpt(validatedFields.data as GenerateExcerptInput);
    if (result && result.excerpt) {
      return { success: true, excerpt: result.excerpt };
    } else {
      return { success: false, error: "Failed to generate excerpt. The AI model might have returned an empty response." };
    }
  } catch (error) {
    console.error("Error generating excerpt:", error);
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}
