import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
      <Navbar />

      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans-luxe text-accent mb-4">Your Selection</p>
          <h1 className="font-display text-4xl md:text-5xl">Shopping Cart</h1>
        </div>

        {cart.length > 0 ? (
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Items List */}
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-white rounded-2xl border border-black/5 hover:shadow-card transition-all">
                  <div className="w-20 h-20 bg-muted rounded-xl overflow-hidden shrink-0">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold mb-2">{item.category}</p>
                    <p className="text-sm font-bold">{item.price}.00 AED</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(i)}
                    className="p-3 text-foreground/20 hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border border-black/5 p-8 sticky top-32 shadow-sm">
                <h2 className="font-display text-2xl mb-8">Summary</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Subtotal</span>
                    <span className="font-bold">{total}.00 AED</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Shipping</span>
                    <span className="font-bold text-accent">Free</span>
                  </div>
                  <div className="h-px bg-black/5 my-4" />
                  <div className="flex justify-between text-lg">
                    <span className="font-display">Total</span>
                    <span className="font-bold">{total}.00 AED</span>
                  </div>
                </div>
                <Link 
                  to="/checkout"
                  className="w-full bg-black text-white py-5 px-6 rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-black/80 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg group"
                >
                  Checkout Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="text-center text-[10px] text-foreground/40 mt-6 uppercase tracking-widest font-bold">
                  Secure Encryption • 100% Authentic
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
               <ShoppingBag className="w-8 h-8 text-foreground/20" />
            </div>
            <h2 className="text-xl font-display mb-4">Your cart is currently empty</h2>
            <p className="text-foreground/40 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
              Looks like you haven't added any luxury K-Beauty items to your bag yet.
            </p>
            <Link to="/shop" className="inline-block py-4 px-10 bg-black text-white text-[11px] font-bold tracking-widest uppercase rounded-lg hover:shadow-xl transition-all active:scale-95">
              Start Shopping
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

export default Cart;
