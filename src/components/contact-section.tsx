'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="relative w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="absolute inset-0 h-full w-full bg-white dark:bg-black bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"></div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl">
          <Card className="border-slate-200/60 bg-white/80 shadow-lg backdrop-blur-lg dark:border-slate-800/60 dark:bg-black/50">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 sm:text-4xl">Contact Me</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">Have a question or want to work together? Drop me a line.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-300">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-white/50 dark:bg-black/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-300">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-white/50 dark:bg-black/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-300">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." className="min-h-[150px] bg-white/50 dark:bg-black/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 transition-colors shadow-lg" disabled={form.formState.isSubmitting}>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
