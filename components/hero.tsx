import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e959897-97fc-4424-94f3-7a6dfbd71f71.jpeg"
          alt="Electric Vibez duo performing"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 from-15% via-background/30 via-45% to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <p className="text-sm lg:text-base uppercase tracking-[0.3em] text-foreground/90 mb-6">
          Wedding & Event Duo
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[0.06em] text-primary mb-8 text-balance">
          ELECTRIC
          <br />
          VIBEZ
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Bringing that extra flair to weddings, events and dancefloors NZ wide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-base uppercase tracking-widest hover:bg-primary/90 transition-colors min-h-[56px]"
          >
            Book Us
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#events"
            className="inline-flex items-center justify-center gap-2 border border-primary/60 text-primary px-8 py-4 text-base uppercase tracking-widest hover:bg-primary/10 transition-colors min-h-[56px]"
          >
            See Us Live
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-muted-foreground/50" />
      </div>
    </section>
  );
}
