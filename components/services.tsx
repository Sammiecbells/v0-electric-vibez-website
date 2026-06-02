import { Heart, Building2, Wine, Utensils } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Make your special day unforgettable with romantic sets, high-energy reception music, and seamless coordination with your event timeline.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional entertainment for galas, holiday parties, product launches, and team celebrations. We set the tone for success.",
  },
  {
    icon: Wine,
    title: "Bars & Nightlife",
    description:
      "Keep the energy high and the crowd engaged with our dynamic performances perfect for bars, clubs, and late-night venues.",
  },
  {
    icon: Utensils,
    title: "Restaurants",
    description:
      "Elegant acoustic sets and ambient performances that enhance the dining experience without overwhelming conversation.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mt-4 text-balance">
            Perfect For Any Event
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 lg:p-10 border border-border hover:border-foreground hover:bg-card transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-foreground mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
