import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Heart, Eye, ShoppingBag, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { QuickView } from "@/components/site/QuickView";
import { useStore } from "@/context/StoreContext";
import s1 from "@/assets/showcase-1.jpg";
import s2 from "@/assets/showcase-2.jpg";
import s3 from "@/assets/showcase-3.jpg";
import serum from "@/assets/product-serum.jpg";
import cream from "@/assets/product-cream.jpg";

import axisy from "@/assets/axisy-eye.png";
import vt from "@/assets/vt-reedle.png";
import tocobo from "@/assets/tocobo-sun.png";
import dralthea from "@/assets/dralthea-vitc.png";

const tabs = ["EXP Top brands", "New arrivals", "Wholesale Only"] as const;

const items = [
  { name: "ANUA Heartleaf 77% Soothing Toner", price: 42, image: s1, category: "Toners" },
  { name: "BEAUTY OF JOSEON Relief Sun : Rice + Probiotics", price: 34, image: tocobo, category: "Sun Care" },
  { name: "COSRX Advanced Snail 96 Mucin Power Essence", price: 28, image: axisy, category: "Essence" },
  { name: "ROUND LAB Birch Juice Moisturizing Sunscreen", price: 38, image: dralthea, category: "Sun Care" },
  { name: "VT Cosmetics Reedle Shot 300 (Wholesale)", price: 57, image: vt, category: "Treatments" },
];

export const Showcase = () => {
  const { addToCart, addToWishlist } = useStore();
  const ref = useReveal<HTMLElement>();
  const [tab, setTab] = useState<(typeof tabs)[number]>("EXP Top brands");
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal flex justify-center mb-16">
          <div className="relative inline-flex items-center">
            <div className="flex gap-8 md:gap-16">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`text-lg md:text-xl font-sans transition-colors duration-500 relative py-2 ${
                    tab === t ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground/70"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            {/* Improved Sliding Underline */}
            <div 
              className="absolute bottom-0 h-0.5 bg-foreground transition-all duration-500 ease-luxe"
              style={{
                left: `${tabs.indexOf(tab) * (100 / tabs.length)}%`,
                width: `${100 / tabs.length}%`,
              }}
            />
          </div>
        </div>

        <div className="reveal relative group/slider mt-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-3">
              {items.map((p, i) => (
                <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-3">
                  <article className="group flex flex-col h-full">
                    <div className="relative aspect-square overflow-hidden bg-[#f7f7f7] mb-6 shadow-sm border border-transparent group-hover:border-black/5 transition-all duration-500">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform ease-luxe group-hover:scale-110"
                        style={{ transitionDuration: '2000ms' }}
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      {/* Icons row - visible on mobile, hover on desktop */}
                      <div className="flex items-center gap-4 mb-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button 
                          onClick={() => addToWishlist(p)}
                          className="text-foreground/70 hover:text-black transition-colors" aria-label="Add to wishlist"
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                        <QuickView product={p}>
                          <button className="text-foreground/70 hover:text-black transition-colors" aria-label="Quick view">
                            <Eye className="w-4 h-4" />
                          </button>
                        </QuickView>
                      </div>

                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                        ))}
                        <span className="text-[10px] text-muted-foreground ml-1 font-medium">(0)</span>
                      </div>
                      <h3 className="font-sans text-sm font-medium tracking-tight mb-2 leading-snug">{p.name}</h3>
                      <div className="mt-auto pt-4 flex items-center justify-between gap-1">
                        <p className="text-sm font-bold tracking-wide">{p.price}.00 AED</p>
                        <button 
                          onClick={() => addToCart(p)}
                          className="bg-black text-white text-[9px] sm:text-[10px] px-3 sm:px-4 py-2 font-bold tracking-widest uppercase rounded hover:bg-accent hover:text-white transition-all active:scale-95 shadow-sm"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-[35%] -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center z-20 hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover/slider:opacity-100 reveal"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-[35%] -translate-y-1/2 translate-x-6 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center z-20 hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover/slider:opacity-100 reveal"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
