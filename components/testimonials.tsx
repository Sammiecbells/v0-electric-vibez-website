import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Electric Vibez made our wedding reception absolutely incredible. Every guest was on the dance floor, and they read the room perfectly throughout the night.",
    author: "Sarah & Michael",
    role: "Wedding Clients",
  },
  {
    quote:
      "We&apos;ve booked them for three corporate events now. Professional, punctual, and always deliver an amazing performance. Highly recommend!",
    author: "Jennifer Thompson",
    role: "Event Coordinator, Tech Corp",
  },
  {
    quote:
      "The energy they bring to our venue every weekend is unmatched. Our regulars specifically ask when Electric Vibez is playing next.",
    author: "Marcus Rivera",
    role: "Owner, The Local Pub",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mt-4 text-balance">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 border border-border"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="text-lg text-foreground leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-bold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
