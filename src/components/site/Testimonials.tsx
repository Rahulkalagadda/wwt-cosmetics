import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import axisy from "@/assets/axisy-eye.png";
import vt from "@/assets/vt-reedle.png";
import tocobo from "@/assets/tocobo-sun.png";

const reviews = [
  {
    name: "Yuna Park",
    location: "Seoul, KR",
    title: "Best Wholesale Supplier",
    body: "Working with WWT Cosmetics has streamlined our inventory. The AXIS-Y eye serum is a top seller for us, and the authenticity is always guaranteed.",
    product: "AXIS-Y Vegan Collagen Eye Serum",
    productImage: axisy,
    price: "28.00 AED"
  },
  {
    name: "Amélie Laurent",
    location: "Dubai, UAE",
    title: "Incredible Selection",
    body: "I've been sourcing my K-beauty essentials here for months. The VT Reedle Shot is a game-changer for my routine and the shipping is lightning fast.",
    product: "VT Cosmetics Reedle Shot 300",
    productImage: vt,
    price: "57.00 AED"
  },
  {
    name: "Nadia Rahman",
    location: "Abu Dhabi, UAE",
    title: "Premium Service",
    body: "The TOCOBO sun stick is perfectly portable. WWT is truly the one-stop shop for anyone looking for legitimate, high-end Korean skincare in the region.",
    product: "TOCOBO Vita Waterproof Sun Stick",
    productImage: tocobo,
    price: "26.00 AED"
  },
];

export const Testimonials = () => {
  const ref = useReveal<HTMLElement>();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="font-sans-luxe text-accent mb-4">Words From Our Community</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">Customer Reviews</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 border border-foreground/10 hover:bg-foreground hover:text-background transition-all duration-500 flex items-center justify-center rounded-full"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 border border-foreground/10 hover:bg-foreground hover:text-background transition-all duration-500 flex items-center justify-center rounded-full"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="reveal overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((r, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
                <article className="h-full bg-background p-8 lg:p-10 shadow-soft hover:shadow-hover transition-all duration-700 ease-luxe border border-border/40">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <h3 className="font-display text-2xl mb-4 leading-tight">"{r.title}"</h3>
                  <p className="text-foreground/70 leading-relaxed mb-8 font-light text-sm">{r.body}</p>
                  <div className="mt-8 pt-8 border-t border-border/40">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1">
                        <p className="text-sm font-bold">{r.name}</p>
                        <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">{r.location}</p>
                      </div>
                    </div>
                    
                    {/* Linked Product Bar */}
                    <div className="flex items-center gap-4 py-3 border-t border-border/20 group/link cursor-pointer">
                      <div className="w-12 h-12 bg-[#f9f9f9] border border-black/5 flex-shrink-0">
                        <img 
                          src={r.productImage} 
                          alt={r.product} 
                          className="w-full h-full object-contain mix-blend-multiply" 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-medium text-foreground/80 truncate mb-0.5">{r.product}</p>
                        <p className="text-[11px] font-bold">{r.price}</p>
                      </div>
                      <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover/link:bg-black group-hover/link:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
