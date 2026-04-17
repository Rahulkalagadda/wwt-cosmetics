import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { User, Package, MapPin, CreditCard, LogOut, Settings, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const Profile = () => {

  const menuItems = [
    { icon: <Package className="w-5 h-5" />, label: "Orders", desc: "Track and view previous orders" },
    { icon: <MapPin className="w-5 h-5" />, label: "Addresses", desc: "Manage your delivery locations" },
    { icon: <CreditCard className="w-5 h-5" />, label: "Payments", desc: "Saved cards and payment methods" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", desc: "Account preferences and security" },
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
      <Navbar />

      {/* Profile Header */}
      <section className="bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="w-32 h-32 bg-accent/20 border-2 border-accent/30 text-white rounded-full flex items-center justify-center font-display text-4xl shadow-2xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Profile" />
            </div>
            <button className="absolute bottom-0 right-0 bg-white text-black p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
              <Settings className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-display text-4xl md:text-5xl mb-2">Jane Doe</h1>
            <p className="text-white/60 text-sm font-medium mb-6">jane.doe@digitalrise.marketing</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
                <Star className="w-3.5 h-3.5 text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Platinum Member</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
                <Package className="w-3.5 h-3.5 text-white/60" />
                <span className="text-[10px] font-bold tracking-widest uppercase">12 Orders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Actions */}
          <div className="lg:col-span-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {menuItems.map((item, i) => (
              <button key={i} className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-black/5 hover:shadow-card transition-all text-left group">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest mb-1">{item.label}</h3>
                  <p className="text-[11px] text-foreground/50 leading-tight">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Personal Info & Security */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm">
               <h2 className="font-display text-2xl mb-8">Personal Information</h2>
               <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-2">First Name</label>
                      <p className="font-bold text-sm">Jane</p>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-2">Last Name</label>
                      <p className="font-bold text-sm">Doe</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-2">Primary Email</label>
                    <p className="font-bold text-sm">jane.doe@digitalrise.marketing</p>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-2">Phone Number</label>
                    <p className="font-bold text-sm">+971 50 123 4567</p>
                  </div>
               </div>
               <button className="mt-10 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent/20 hover:border-accent transition-all pb-1">
                 Edit Personal Details
               </button>
            </div>
          </div>

          {/* Activity / Notifications */}
          <div className="lg:col-span-5 space-y-6">
             <div className="bg-accent/5 rounded-2xl border border-accent/10 p-8">
                <h3 className="font-bold text-xs uppercase tracking-widest mb-6">Recent Activity</h3>
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold mb-1">Order #8829 Shipped</p>
                        <p className="text-[10px] text-foreground/40">Expected delivery in 2 days</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-black/10 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold mb-1">Wishlist Update</p>
                        <p className="text-[10px] text-foreground/40">3 items from your list are now on sale</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-white rounded-2xl border border-black/5 p-8 flex items-center justify-between">
                <div>
                   <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-1">Support</h3>
                   <p className="text-xs text-foreground/40">Need help with an order?</p>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                   Live Chat
                </button>
             </div>
          </div>
          
          <div className="lg:col-span-12">
            <button className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-black/5 hover:bg-destructive/5 group transition-all text-left w-full">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                <LogOut className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm mb-1 group-hover:text-destructive transition-colors">Log Out</h3>
                <p className="text-xs text-foreground/50">Securely sign out of your account</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </main>
  );
};

export default Profile;
