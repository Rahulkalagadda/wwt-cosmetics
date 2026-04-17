import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const articles = [
  {
    title: "The Ultimate Guide to Centella Asiatica",
    category: "Ingredient Spotlight",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2080&auto=format&fit=crop",
    excerpt: "Discover why 'Cica' has become the cornerstone of sensitive skin recovery algorithms in Korean laboratories."
  },
  {
    title: "10 Steps to the Perfect Glass Skin Routine",
    category: "Routines",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1570194065650-d6a2a5efc277?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Achieve the coveted luminescent glow with our curated 10-step wholesale strategy."
  },
  {
    title: "Why Sunscreen is Your Best Anti-Aging Tool",
    category: "Skin Education",
    date: "April 02, 2026",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop",
    excerpt: "The science behind UV protection and how modern Korean sunscreens have revolutionized daily application."
  }
];

const Blog = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
      <Navbar />

      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans-luxe text-accent mb-4">Editorial</p>
          <h1 className="font-display text-4xl md:text-5xl">The Journal</h1>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((a, i) => (
            <article key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-sm">
                <img 
                  src={a.image} 
                  alt={a.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-luxe"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent">{a.category}</span>
                <span className="w-1 h-1 rounded-full bg-black/20" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground/40">{a.date}</span>
              </div>
              <h2 className="font-display text-2xl mb-3 group-hover:text-accent transition-colors">{a.title}</h2>
              <p className="text-foreground/70 font-light text-sm leading-relaxed mb-6">{a.excerpt}</p>
              
              <a href="#" className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
                Read Article <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </main>
  );
};

export default Blog;
