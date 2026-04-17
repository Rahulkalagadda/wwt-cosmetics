import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CheckCircle, ArrowRight, Package, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "@/context/StoreContext";

const Success = () => {
  const { cart } = useStore();
  
  // Optional: You could clear the cart here if you had a separate clear function
  // For now we just show the confirmation

  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
      <Navbar />

      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-10">
          <div className="w-24 h-24 bg-accent/10 text-accent rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle className="w-12 h-12" />
          </div>
        </div>

        <p className="font-sans-luxe text-accent mb-4">Order Confirmed</p>
        <h1 className="font-display text-5xl md:text-6xl mb-6">Thank You for Your Order!</h1>
        <p className="text-foreground/40 text-lg mb-16 max-w-xl mx-auto leading-relaxed">
          Your order <span className="text-black font-bold">#EXP-29384</span> has been placed successfully and is now being prepared for shipping.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-black/5 text-left flex gap-6">
            <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center shrink-0">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1 uppercase tracking-widest text-foreground/40">Status</h3>
              <p className="font-bold text-lg">Order Processing</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-black/5 text-left flex gap-6">
            <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1 uppercase tracking-widest text-foreground/40">Estimated Delivery</h3>
              <p className="font-bold text-lg">April 20, 2026</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/profile" className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-black/80 transition-all flex items-center justify-center gap-3">
            Track Your Order <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/shop" className="w-full sm:w-auto bg-white border border-black/10 px-10 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-black/5 transition-all">
            Continue Shopping
          </Link>
        </div>

        <div className="mt-24 pt-16 border-t border-black/5">
           <h3 className="font-bold text-sm uppercase tracking-widest mb-6">Connect With Us</h3>
           <div className="flex justify-center gap-8">
              <a href="#" className="text-foreground/40 hover:text-black transition-colors">Instagram</a>
              <a href="#" className="text-foreground/40 hover:text-black transition-colors">Facebook</a>
              <a href="#" className="text-foreground/40 hover:text-black transition-colors">WhatsApp</a>
           </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </main>
  );
};

export default Success;
