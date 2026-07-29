"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, Instagram, Facebook } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  eventType: "",
  date: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mt-4 mb-8 text-balance">
              Book Your Event
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ready to bring the energy to your next event? Fill out the form
              and we&apos;ll get back to you within 24 hours to discuss your
              vision.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:electricvibezmusic@gmail.com"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">electricvibezmusic@gmail.com</span>
              </a>
              <a
                href="tel:+64211079135"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">021 107 9135</span>
              </a>
            </div>

            <div className="mt-12">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
              <a
                href="https://www.instagram.com/electricvibez_music?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561533703539"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-background border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-background border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors text-base"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
                >
                  Event Type
                </label>
                <select
                  id="eventType"
                  required
                  value={formData.eventType}
                  onChange={(e) =>
                    setFormData({ ...formData, eventType: e.target.value })
                  }
                  className="w-full bg-background border border-border px-4 py-4 text-foreground focus:outline-none focus:border-foreground transition-colors text-base appearance-none"
                >
                  <option value="">Select type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="bar">Bar/Nightlife</option>
                  <option value="birthday">Birthday</option>
                  <option value="private">Private Party</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full bg-background border border-border px-4 py-4 text-foreground focus:outline-none focus:border-foreground transition-colors text-base"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-background border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none text-base"
                placeholder="Tell us about your event..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-base uppercase tracking-widest hover:bg-primary/90 transition-colors min-h-[56px] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <ArrowRight className="w-4 h-4" />
            </button>

            {status === "success" && (
              <p className="text-foreground">
                Thanks! Your message has been sent. We&apos;ll get back to you
                within 24 hours.
              </p>
            )}

            {status === "error" && (
              <p className="text-primary">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
