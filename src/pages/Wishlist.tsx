import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Heart, ShoppingBag, X } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Link } from "react-router-dom";
import { useStore } from "@/context/StoreContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStore();
  const ref = useReveal<HTMLElement>();

  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
      <Navbar />

      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans-luxe text-accent mb-4">Saved Items</p>
          <h1 className="font-display text-4xl md:text-5xl">Your Wishlist</h1>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid gap-6">
            {wishlist.map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-4 bg-white rounded-2xl border border-black/5 hover:shadow-card transition-all">
                <div className="w-24 h-24 bg-muted rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm mb-1 truncate">{item.name}</h3>
                  <p className="text-sm font-bold">{item.price}.00 AED</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => {
                      addToCart(item);
                      removeFromWishlist(item.name);
                    }}
                    className="bg-black text-white p-3 rounded-xl hover:bg-accent transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => removeFromWishlist(item.name)}
                    className="p-3 text-foreground/20 hover:text-destructive transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Heart className="w-12 h-12 text-foreground/10 mx-auto mb-6" />
            <h2 className="text-xl font-display mb-4">Your wishlist is empty</h2>
            <Link to="/shop" className="inline-block py-4 px-8 bg-black text-white text-[11px] font-bold tracking-widest uppercase rounded-lg">
              Explore Products
            </Link>
          </div>
        )}
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </main>
  );
};

export default Wishlist;
