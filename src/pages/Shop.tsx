import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { QuickView } from "@/components/site/QuickView";
import { Heart, Eye, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useStore } from "@/context/StoreContext";

// Placeholder images
import s1 from "@/assets/showcase-1.jpg";
import s2 from "@/assets/showcase-2.jpg";
import s3 from "@/assets/showcase-3.jpg";
import axisy from "@/assets/axisy-eye.png";
import vt from "@/assets/vt-reedle.png";
import tocobo from "@/assets/tocobo-sun.png";
import dralthea from "@/assets/dralthea-vitc.png";

const products = [
  { name: "ANUA Heartleaf 77% Soothing Toner", price: 42, image: s1, category: "Toners" },
  { name: "BEAUTY OF JOSEON Relief Sun : Rice + Probiotics", price: 34, image: tocobo, category: "Sun Care" },
  { name: "COSRX Advanced Snail 96 Mucin Power Essence", price: 28, image: axisy, category: "Essence" },
  { name: "ROUND LAB Birch Juice Moisturizing Sunscreen", price: 38, image: dralthea, category: "Sun Care" },
  { name: "VT Cosmetics Reedle Shot 300", price: 57, image: vt, category: "Treatments" },
  { name: "AXIS-Y Dark Spot Correcting Glow Serum", price: 45, image: s2, category: "Serum" },
  { name: "SKIN1004 Madagascar Centella Asiatica", price: 30, image: s3, category: "Ampoule" },
  { name: "AXIS-Y Vegan Collagen Eye Serum", price: 28, image: axisy, category: "Eye Care" },
  { name: "TOCOBO Vita Waterproof Sun Stick", price: 26, image: tocobo, category: "Sun Care" },
  { name: "Dr. Althea Gentle Vitamin C Serum", price: 35, image: dralthea, category: "Serums" },
  { name: "ISNTREE Hyaluronic Acid Watery Sun Gel", price: 32, image: dralthea, category: "Sun Care" },
];

const Shop = () => {
  const { addToCart, addToWishlist } = useStore();
  const ref = useReveal<HTMLElement>();

  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
      <Navbar />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="font-sans-luxe text-accent mb-4">The Collection</p>
            <h1 className="font-display text-4xl md:text-5xl">Shop All</h1>
          </div>
          <div className="flex gap-4">
            <select className="border border-black/10 bg-transparent py-2 px-4 text-xs font-bold uppercase tracking-widest focus:outline-none">
              <option>Sort By: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          {products.map((p, i) => (
            <article key={i} className="group flex flex-col h-full bg-white p-4 shadow-sm hover:shadow-card transition-all duration-500 rounded-xl">
              <div className="relative aspect-square overflow-hidden bg-[#f7f7f7] mb-6 rounded-lg pointer-events-auto">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform ease-luxe group-hover:scale-105"
                  style={{ transitionDuration: '2000ms' }}
                />
                <div className="absolute inset-0 bg-black/5 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button 
                      onClick={() => addToWishlist(p)}
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-colors" aria-label="Add to wishlist"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <QuickView product={p}>
                      <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-colors" aria-label="Quick view">
                        <Eye className="w-4 h-4" />
                      </button>
                    </QuickView>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                  <span className="text-[10px] text-muted-foreground ml-1 font-medium">(12)</span>
                </div>
                <h3 className="font-sans text-sm font-medium tracking-tight mb-2 leading-snug">{p.name}</h3>
                <div className="mt-auto pt-4 flex items-center justify-between gap-2">
                  <p className="text-sm font-bold tracking-wide">{p.price}.00 AED</p>
                  <button 
                    onClick={() => addToCart(p)}
                    className="bg-black text-white text-[9px] sm:text-[10px] px-3 sm:px-4 py-2 font-bold tracking-widest uppercase rounded hover:bg-accent hover:text-white transition-colors active:scale-95 shadow-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
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

export default Shop;
