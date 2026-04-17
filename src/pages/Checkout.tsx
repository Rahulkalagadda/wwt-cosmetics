import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useStore } from "@/context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, CreditCard, Truck, ShieldCheck, MapPin } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { cart } = useStore();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Processing your order...");
    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-background selection:bg-accent/20">
        <Navbar />
        <div className="py-40 text-center px-6">
          <h1 className="font-display text-4xl mb-6">Your bag is empty</h1>
          <p className="text-foreground/40 mb-10">Add items to your cart before checking out.</p>
          <Link to="/shop" className="bg-black text-white px-10 py-4 rounded-lg text-[11px] font-bold uppercase tracking-widest">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
      <Navbar />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-12">
          <Link to="/cart" className="hover:text-black transition-colors">Cart</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">Information</span>
          <ChevronRight className="w-3 h-3" />
          <span>Payment</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Shipping Form */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-3xl mb-10">Shipping Information</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">First Name</label>
                  <input required type="text" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">Last Name</label>
                  <input required type="text" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">Email Address</label>
                <input required type="email" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">Shipping Address</label>
                <input required type="text" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Street Address, Apartment, Suite" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">City</label>
                  <input required type="text" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Dubai" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">Country</label>
                  <select className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors">
                    <option>UAE</option>
                    <option>Saudi Arabia</option>
                    <option>Oman</option>
                    <option>Kuwait</option>
                  </select>
                </div>
              </div>

              <div className="pt-8">
                <h2 className="font-display text-2xl mb-8">Payment Method</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                   <label className="relative flex flex-col p-6 bg-white border border-black/10 rounded-2xl cursor-pointer hover:border-accent transition-all group has-[:checked]:border-accent has-[:checked]:bg-accent/[0.02]">
                      <input type="radio" name="payment" defaultChecked className="absolute top-6 right-6 accent-accent w-4 h-4" />
                      <CreditCard className="w-6 h-6 mb-4 text-foreground/80" />
                      <span className="font-bold text-sm mb-1">Credit / Debit Card</span>
                      <span className="text-[10px] text-foreground/40 uppercase tracking-widest">Pay securely online</span>
                   </label>
                   <label className="relative flex flex-col p-6 bg-white border border-black/10 rounded-2xl cursor-pointer hover:border-accent transition-all group has-[:checked]:border-accent has-[:checked]:bg-accent/[0.02]">
                      <input type="radio" name="payment" className="absolute top-6 right-6 accent-accent w-4 h-4" />
                      <Truck className="w-6 h-6 mb-4 text-foreground/80" />
                      <span className="font-bold text-sm mb-1">Cash on Delivery</span>
                      <span className="text-[10px] text-foreground/40 uppercase tracking-widest">Pay when you receive</span>
                   </label>
                </div>
              </div>

              <button type="submit" className="w-full bg-black text-white py-5 px-6 rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-black/80 transition-all shadow-xl active:scale-95 mt-10">
                Complete Purchase • {total}.00 AED
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-black/5 p-8 lg:p-10 sticky top-32">
              <h2 className="font-display text-2xl mb-8">Order Summary</h2>
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                {cart.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-muted rounded-xl shrink-0 overflow-hidden">
                      <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate mb-1">{item.name}</p>
                      <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">{item.category}</p>
                    </div>
                    <p className="text-xs font-bold">{item.price}.00 AED</p>
                  </div>
                ))}
              </div>
              
              <div className="h-px bg-black/5 mb-8" />
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/40 uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="font-bold">{total}.00 AED</span>
                </div>
                <div className="flex justify-between text-xs text-accent">
                  <span className="uppercase tracking-widest font-bold">Shipping</span>
                  <span className="font-bold uppercase tracking-widest">Free</span>
                </div>
                <div className="flex justify-between text-lg pt-4">
                  <span className="font-display">Total Due</span>
                  <span className="font-bold">{total}.00 AED</span>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-2xl flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span className="font-medium">Secure SSL encrypted checkout</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span className="font-medium">100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </main>
  );
};

export default Checkout;
