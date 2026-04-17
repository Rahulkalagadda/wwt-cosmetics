import { useReveal } from "@/hooks/useReveal";
import centella from "@/assets/brand-centella.jpg";

export const BrandStory = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="aspect-[4/5] overflow-hidden bg-[#f4f4f4] rounded-2xl shadow-inner group">
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop" 
              alt="Premium Skincare Warehouse" 
              loading="lazy" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-[3000ms]" 
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-black text-white p-8 shadow-2xl max-w-[240px] rounded-sm">
            <p className="font-display text-4xl mb-2">100%</p>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] leading-relaxed opacity-80">
              Guaranteed Authentic Sourcing Direct from Seoul
            </p>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "200ms" }}>
          <p className="font-sans-luxe text-accent mb-6 uppercase tracking-[0.25em]">Our Identity</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Your Premium <em className="text-accent not-italic">K-Beauty</em> Hub.
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6 font-light text-lg">
            EXP stands as a global leader in the distribution of authentic Korean beauty. We bridge the gap between Seoul's innovative labs and your doorstep.
          </p>
          <p className="text-foreground/60 leading-relaxed mb-10 font-light">
            Whether you're a boutique retailer or a skincare enthusiast, our curated selection of 100+ brands—including AXIS-Y, Anua, and VT Cosmetics—is chosen for one reason: results that speak for themselves.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/5">
            <div>
              <p className="font-display text-3xl mb-1">15+</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Global Years</p>
            </div>
            <div>
              <p className="font-display text-3xl mb-1">100+</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Luxury Brands</p>
            </div>
            <div>
              <p className="font-display text-3xl mb-1">50+</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
