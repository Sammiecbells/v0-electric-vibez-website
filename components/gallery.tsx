import Image from "next/image";

const videos = [
  {
    id: "f-TIEKWMpW4",
    title: "Electric Vibez promo video",
  },
  {
    id: "3BEE4lw01lY",
    title: "Electric Vibez live performance",
  },
  {
    id: "zprOWHz3nLA",
    title: "Electric Vibez performance video",
  },
];

const images = [
  {
    src: "/images/gallery-mural.png",
    alt: "Sammie and Angelo with acoustic guitar in front of a mural",
    className: "col-span-1",
  },
  {
    src: "/images/gallery-beach.png",
    alt: "Sammie and Angelo with acoustic guitar at the beach",
    className: "col-span-1",
  },
  {
    src: "/images/gallery-lounge.png",
    alt: "Sammie and Angelo with acoustic guitar at a lounge event",
    className: "col-span-1",
    objectPosition: "center top",
  },
  {
    src: "/images/gallery-duo.png",
    alt: "Sammie and Angelo with acoustic guitar",
    className: "col-span-1",
    objectPosition: "center top",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Our Work
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mt-4 text-balance">
            Check Out Our Promo Video & Pics
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 lg:mb-8">
              Snaps
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-square overflow-hidden group ${image.className}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={
                      "objectPosition" in image && image.objectPosition
                        ? { objectPosition: image.objectPosition }
                        : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 lg:mb-8">
              Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative aspect-video w-full overflow-hidden border border-border"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
