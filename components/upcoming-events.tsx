import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { format, parseISO } from "date-fns";
import { upcomingEvents } from "@/data/upcoming-events";

export function UpcomingEvents() {
  const events = [...upcomingEvents].sort(
    (a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime()
  );

  return (
    <section id="events" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Live Shows
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mt-4 text-balance">
            Catch Us Live and Say Hello
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            Catch Electric Vibez at these upcoming gigs. Bring your friends,
            hit the dancefloor, and see what we&apos;re all about.
          </p>
        </div>

        {events.length > 0 ? (
          <div className="grid gap-6 max-w-4xl mx-auto">
            {events.map((event) => {
              const eventDate = parseISO(event.date);

              return (
                <article
                  key={event.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 lg:p-8 border border-border hover:border-foreground transition-colors"
                >
                  <div className="shrink-0 text-center sm:text-left sm:min-w-[88px]">
                    <div className="text-sm uppercase tracking-widest text-primary">
                      {format(eventDate, "MMM")}
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-foreground leading-none mt-1">
                      {format(eventDate, "d")}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {format(eventDate, "yyyy")}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 shrink-0" />
                        <span>
                          {event.venue}, {event.location}
                        </span>
                      </p>
                      {event.time && (
                        <p className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 shrink-0" />
                          <span>{event.time}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {(event.ticketUrl || event.venueUrl) && (
                    <div className="shrink-0">
                      <a
                        href={event.ticketUrl ?? event.venueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-primary/60 text-primary px-6 py-3 text-sm uppercase tracking-widest hover:bg-primary/10 transition-colors min-h-[48px] w-full sm:w-auto"
                      >
                        {event.ticketUrl ? "Get Tickets" : "View Venue"}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center border border-border p-10 lg:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              No public shows listed right now. Check back soon or get in touch
              to book us for your next event.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-base uppercase tracking-widest hover:bg-primary/90 transition-colors min-h-[56px] mt-8"
            >
              Book Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
