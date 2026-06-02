import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6ddbe4cf-2e0f-49db-ba73-878487e41202.jpeg"
              alt="Electric Vibez duo portrait"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mt-4 mb-8 text-balance">
              We Create Unforgettable Moments
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Electric Vibez is more than just a band—we&apos;re your
                partners in creating the perfect atmosphere for any event.
                As a dynamic duo, we bring high energy, versatility, and
                professionalism to every performance.
              </p>
              <p>
                From intimate wedding receptions to packed corporate galas,
                from lively bar nights to elegant restaurant evenings, we
                tailor our setlist and energy to match your vision perfectly.
              </p>
              <p>
                Our chemistry on stage is undeniable, and our passion for
                music is contagious. When you book Electric Vibez, you&apos;re
                booking an experience your guests will talk about for years.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">
                  500+
                </div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground mt-2">
                  Events
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">
                  5★
                </div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground mt-2">
                  Rating
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">
                  100%
                </div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground mt-2">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
