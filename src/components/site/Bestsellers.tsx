import { Plus, Star, Heart, Eye, ShoppingBag } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { QuickView } from "@/components/site/QuickView";
import axisy from "@/assets/axisy-eye.png";
import vt from "@/assets/vt-reedle.png";
import tocobo from "@/assets/tocobo-sun.png";
import dralthea from "@/assets/dralthea-vitc.png";

const products = [
  { name: "AXIS-Y Vegan Collagen Eye Serum", subtitle: "Anti-Aging Eye Care 10ml", price: 28, rating: 4.9, image: axisy, badge: "Trending", category: "Eye Serums" },
  { name: "VT Cosmetics Reedle Shot 300", subtitle: "Microneedle Essence 50ml", price: 57, rating: 5.0, image: vt, badge: "Bestseller", category: "Treatments" },
  { name: "TOCOBO Vita Waterproof Sun Stick", subtitle: "Broad Spectrum SPF50", price: 26, rating: 4.8, image: tocobo, badge: "Essential", category: "Sun Care" },
  { name: "Dr. Althea Gentle Vitamin C Serum", subtitle: "Brightening Treatment 30ml", price: 35, rating: 4.9, image: dralthea, category: "Serums" },
];

export const Bestsellers = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="bestsellers" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal flex flex-col items-center text-center mb-16">
          <p className="font-sans-luxe text-accent mb-4 tracking-[0.2em]">Loved by Fans</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">Most Popular</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="reveal group flex flex-col"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#f7f7f7] mb-6 shadow-sm border border-transparent group-hover:border-black/5 transition-all duration-500">
                {p.badge && (
                  <span className="absolute top-4 left-4 z-20 bg-foreground text-background px-3 py-1 text-[9px] font-bold tracking-widest uppercase shadow-sm">
                    {p.badge}
                  </span>
                )}
                
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform ease-luxe group-hover:scale-105"
                  style={{ transitionDuration: '1500ms' }}
                />
              </div>

              <div className="flex-1 flex flex-col pt-4">
                {/* Icons row - appearing on hover */}
                <div className="flex items-center gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-foreground/70 hover:text-black transition-colors" aria-label="Add to wishlist">
                    <Heart className="w-5 h-5" />
                  </button>
                  <QuickView product={p}>
                    <button className="text-foreground/70 hover:text-black transition-colors" aria-label="Quick view">
                      <Eye className="w-5 h-5" />
                    </button>
                  </QuickView>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                  <span className="text-[10px] text-muted-foreground ml-1 font-medium">(0)</span>
                </div>
                <h3 className="font-sans text-lg font-medium tracking-tight mb-1">{p.name}</h3>
                <p className="text-sm font-bold mb-5 tracking-wide">{p.price}.00 AED</p>
                
                <button className="mt-auto w-full py-3.5 border border-black flex items-center justify-center gap-3 bg-white hover:bg-black hover:text-white transition-all duration-500 uppercase text-[11px] font-bold tracking-widest group/btn">
                  <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:scale-110" strokeWidth={1.5} />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
