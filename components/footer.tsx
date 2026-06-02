import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <Link
            href="/"
            className="text-xl lg:text-2xl font-bold tracking-tight text-accent"
          >
            ELECTRIC VIBEZ
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
            <Link
              href="#about"
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="#contact"
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Electric Vibez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
