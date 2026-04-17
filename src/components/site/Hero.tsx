import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-skincare.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Global Excellence",
    title: "Premium K-Beauty",
    subtitle: "Your one-stop destination for wholesale & retail Korean skincare—available worldwide.",
    cta: "Shop Wholesale",
  },
  {
    image: hero2,
    eyebrow: "Curated Selection",
    title: "Leading Brands",
    subtitle: "Explore 100+ authentic brands including AXIS-Y, Anua, and Dr. Althea at competitive prices.",
    cta: "Explore Brands",
  },
  {
    image: hero3,
    eyebrow: "Specialized Care",
    title: "WWT Selections",
    subtitle: "Professional-grade beauty routines powered by the most innovative labs in Seoul.",
    cta: "Browse Catalog",
  },
];

export const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[620px] max-h-[860px] overflow-hidden bg-cream">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity ease-luxe ${
            i === active ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
          style={{ transitionDuration: '1800ms' }}
          aria-hidden={i !== active}
        >
          <img
            src={s.image}
            alt={s.title}
            className={`absolute inset-0 w-full h-full object-cover transition-transform ease-linear ${
              i === active ? "scale-[1.12]" : "scale-100"
            }`}
            style={{ transitionDuration: '4500ms' }}
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/40 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
        <div className="max-w-xl">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`transition-all duration-1000 ease-luxe ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 absolute pointer-events-none"
              }`}
            >
              <p className="font-sans-luxe text-accent mb-6">{s.eyebrow}</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 text-foreground">
                {s.title}
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-md font-light">
                {s.subtitle}
              </p>
              <a
                href="#bestsellers"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:text-accent-foreground transition-all duration-500 btn-premium shadow-lg"
              >
                <span className="relative z-10 font-sans-luxe">{s.cta}</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-[2px] transition-all duration-500 ease-luxe ${
              i === active ? "w-12 bg-foreground" : "w-6 bg-foreground/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
