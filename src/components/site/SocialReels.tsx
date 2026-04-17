import { Play, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useReveal } from "@/hooks/useReveal";
import { QuickView } from "@/components/site/QuickView";
import s1 from "@/assets/showcase-1.jpg";
import s2 from "@/assets/showcase-2.jpg";
import s3 from "@/assets/showcase-3.jpg";
import centella from "@/assets/brand-centella.jpg";
import hero3 from "@/assets/hero-3.jpg";

const reels = [
  { image: vt, handle: "@wwtcosmetics", caption: "Premium wholesale selection" },
  { image: axisy, handle: "@kbeauty_glow", caption: "Trending in Seoul right now" },
  { image: tocobo, handle: "@luxury_skincare", caption: "The texture of pure luxury" },
  { image: tocobo, handle: "@wwt.distributor", caption: "Authorized distribution portal" },
  { image: dralthea, handle: "@beauty_hacks", caption: "Your daily skin ritual" },
];

export const SocialReels = () => {
  const ref = useReveal<HTMLElement>();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="font-sans-luxe text-accent mb-4 tracking-[0.2em] uppercase text-[10px] font-bold">@wwtcosmetics</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9]">Shoppable Moments</h2>
          </div>
          <a href="#" className="font-sans-luxe text-foreground/60 hover:text-accent transition-colors">
            Follow us →
          </a>
        </div>
      </div>

      <div className="reveal relative group/slider">
        <div className="overflow-hidden px-6 lg:px-10" ref={emblaRef}>
          <div className="flex gap-5">
            {reels.map((r, i) => (
              <div
                key={i}
                className="group relative flex-[0_0_280px] md:flex-[0_0_340px] aspect-[9/16] overflow-hidden bg-secondary shadow-soft hover:shadow-hover transition-all duration-700 ease-luxe"
              >
                <img
                  src={r.image}
                  alt={r.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform ease-luxe group-hover:scale-105 group-hover:brightness-105"
                  style={{ transitionDuration: '2000ms' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                
                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  <Play className="w-5 h-5 fill-current" />
                </div>

                {/* Shoppable Product Tag */}
                <div className="absolute bottom-5 left-5 right-5 bg-white p-3 shadow-xl flex items-center gap-3 translate-y-2 group-hover:translate-y-0 transition-all duration-700 ease-luxe border border-black/5">
                  <div className="w-12 h-12 rounded-full border border-black/5 overflow-hidden flex-shrink-0 bg-[#f7f7f7]">
                    <img src={r.image} alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold truncate leading-tight mb-0.5 tracking-tight">{r.caption}</p>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-accent">125.00 AED</span>
                       <span className="text-[9px] text-muted-foreground line-through decoration-muted-foreground/50">199.00 AED</span>
                    </div>
                  </div>
                  <QuickView product={{ name: r.caption, price: 1250, image: r.image, category: "Shop the Moment" }}>
                    <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors flex-shrink-0" aria-label="View Product">
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </QuickView>
                </div>

                <div className="absolute top-6 left-6 text-white text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 uppercase">
                  {r.handle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-10 lg:left-14 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center z-20 hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover/slider:opacity-100 reveal"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-10 lg:right-14 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center z-20 hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover/slider:opacity-100 reveal"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
