import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const lines = [
  {
    title: "WHOLESALE CATALOG",
    description: "Global bulk ordering and distribution for retailers & spas.",
    color: "#0076B6",
    link: "#",
  },
  {
    title: "PREMIUM RETAIL",
    description: "Curated individual luxury skincare essentials for home care.",
    color: "#7d6e4a",
    link: "#",
  },
  {
    title: "BRAND PARTNERS",
    description: "Official authorized gateway to 100+ prestigious Seoul brands.",
    color: "#1a1a1a",
    link: "#",
  },
];

export const ProductLines = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {lines.map((line, i) => (
            <a
              key={line.title}
              href={line.link}
              className="reveal group relative overflow-hidden p-8 lg:p-10 flex flex-col justify-end min-h-[220px] transition-all duration-700 ease-luxe hover:shadow-hover"
              style={{ 
                backgroundColor: line.color,
                transitionDelay: `${i * 150}ms`
              }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
              <div className="relative z-10 text-white">
                <h3 className="font-display text-2xl lg:text-3xl mb-2">{line.title}</h3>
                <p className="text-white/90 font-light text-sm mb-6 max-w-[200px] leading-relaxed">
                  {line.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] font-sans-luxe tracking-[0.2em] uppercase border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  Explore <ArrowRight className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Subtle decorative element */}
              <div className="absolute top-[-20%] right-[-10%] w-40 h-40 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
