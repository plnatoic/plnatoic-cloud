import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ResourcesBank() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-left max-w-2xl mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Resources bank
          </h2>
        </div>
        <Link href="#" className="group block">
          <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                <Image
                  src="https://placehold.co/800x600.png"
                  alt="Changelog for 2024"
                  fill
                  className="object-cover"
                  data-ai-hint="vr headset"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col">
                <h3 className="font-headline text-3xl font-bold mb-4">
                  Changelog for 2024
                </h3>
                <p className="font-body text-muted-foreground text-lg mb-8 flex-grow">
                  Explore the latest updates and enhancements in our 2024 changelog. Discover new features and improvements that enhance user experience.
                </p>
                 <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://placehold.co/40x40.png" alt="Manu Arora" />
                        <AvatarFallback>MA</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-body font-semibold">Manu Arora</p>
                        <p className="font-body text-sm text-muted-foreground">January 01, 2021</p>
                    </div>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </section>
  );
}
