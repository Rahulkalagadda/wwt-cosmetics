import { useReveal } from "@/hooks/useReveal";
import axisy from "@/assets/axisy-eye.png";
import vt from "@/assets/vt-reedle.png";
import tocobo from "@/assets/tocobo-sun.png";
import dralthea from "@/assets/dralthea-vitc.png";

const cats = [
  { label: "Serums", count: "34 Products", image: axisy },
  { label: "Toners", count: "28 Products", image: dralthea },
  { label: "Creams", count: "42 Products", image: vt },
  { label: "Sun Care", count: "19 Products", image: tocobo },
  { label: "Essences", count: "15 Products", image: axisy },
  { label: "Treatments", count: "22 Products", image: vt },
];

export const Categories = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal text-center mb-16">
          <p className="font-sans-luxe text-accent mb-4">Explore</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">Featured Categories</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-8">
          {cats.map((c, i) => (
            <a
              key={c.label}
              href="#"
              className="reveal group block text-center transition-transform duration-700 ease-luxe hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-full bg-secondary mb-5 shadow-soft group-hover:shadow-hover transition-all duration-700 ease-luxe">
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform ease-luxe group-hover:scale-110"
                  style={{ transitionDuration: '2000ms' }}
                />
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxe" />
              </div>
              <h3 className="font-display text-xl mb-1 group-hover:text-accent transition-colors duration-500">{c.label}</h3>
              <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">{c.count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
