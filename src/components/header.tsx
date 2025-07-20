import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="font-headline text-2xl font-bold text-primary">Persona Canvas</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
