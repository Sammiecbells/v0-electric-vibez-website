import Image from "next/image";

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/96ce7881-036b-448c-b93a-6416603d8bf8.jpeg",
    alt: "Electric Vibez performing outdoors",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e959897-97fc-4424-94f3-7a6dfbd71f71.jpeg",
    alt: "Electric Vibez at a bar venue",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6ddbe4cf-2e0f-49db-ba73-878487e41202.jpeg",
    alt: "Electric Vibez duo portrait",
    className: "col-span-1 row-span-1",
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
