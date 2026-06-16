import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4]">
            <Image
              src="/images/about-duo.png"
              alt="Electric Vibez duo performing on the beach"
              fill
              className="object-cover object-center"
            />
          </div>
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mt-4 mb-8 text-balance">
              Creating Contagious Energy and Unforgettable Moments
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Electric Vibez are an extremely versatile and skilled duo based
                in BOP bringing flair to your next event! They can easily
                adjust, perfectly complementing your relaxed background vibes, or
                amp up the night!
              </p>
              <p>
                Effortlessly carrying a full dancefloor and catering to all your
                requests! They specialise in anything from country &amp; rock all
                the way to reggae &amp; RnB! Definitely a duo that brings you
                bang for your buck!
              </p>
              <p>
                Guaranteed to get a crowd up and on their feet and wanting more!
                Perfect for your Wedding or Private Function.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
