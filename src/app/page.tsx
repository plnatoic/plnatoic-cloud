import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SanctuarySection from '@/components/sanctuary-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SanctuarySection />
        <ContactSection />
      </main>
      <footer className="bg-background py-6 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Platonic Area. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
