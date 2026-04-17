import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useReveal } from "@/hooks/useReveal";

const About = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1615397347202-711979296647?q=80&w=2070&auto=format&fit=crop" 
            alt="About Us"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="font-sans-luxe text-white/80 mb-4">The EXP Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-white">Elevating K-Beauty</h1>
        </div>
      </section>

      {/* Content */}
      <section ref={ref} className="py-24 max-w-5xl mx-auto px-6">
        <div className="reveal grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl mb-6">Our Mission</h2>
            <p className="text-foreground/70 font-light leading-relaxed mb-6">
              EXP was founded with a singular vision: to bridge the gap between Seoul’s most innovative skincare laboratories and the global market. We curate only the most effective, research-backed formulations to ensure our clients receive the absolute best.
            </p>
            <p className="text-foreground/70 font-light leading-relaxed">
              With over 15 years in global distribution, our luxury portfolio strictly contains 100% authentic brands directly from the source.
            </p>
          </div>
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-soft">
             <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Skincare laboratory" />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </main>
  );
};

export default About;
