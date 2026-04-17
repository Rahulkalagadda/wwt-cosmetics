import { Instagram, Facebook, ArrowUpRight, Music2, ChevronUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#7d6e4a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Get In Touch */}
          <div>
            <h3 className="font-sans-luxe text-lg font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4 text-[13px] text-white/90 leading-relaxed font-medium">
              <p>Address: Premium Beauty Hub, Global Distribution Center.</p>
              <p>Email: <a href="mailto:info@wwtcosmetics.com" className="hover:text-accent transition-colors">info@wwtcosmetics.com</a></p>
              <p>Phone: Support Available 24/7</p>
              <a href="#" className="inline-flex items-center gap-1 border-b border-white pb-0.5 hover:text-accent hover:border-accent transition-all mt-4">
                Get direction <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <div className="flex gap-3 mt-8">
              {[Facebook, Instagram, Music2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-[#7d6e4a] transition-all"
                  aria-label="Social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans-luxe text-lg font-bold mb-6">Help</h3>
            <ul className="space-y-4 text-[13px] text-white/90 font-medium">
              {["Privacy Policy", "Returns + Exchanges", "Shipping", "Terms & Conditions", "FAQ's"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-sans-luxe text-lg font-bold mb-6">Useful Links</h3>
            <ul className="space-y-4 text-[13px] text-white/90 font-medium">
              {["About Us", "Customer Care", "Sell with us", "Delivery"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sign Up for Email */}
          <div>
            <h3 className="font-sans-luxe text-lg font-bold mb-6">Sign Up for Email</h3>
            <p className="text-[13px] text-white/90 leading-relaxed font-medium mb-6">
              Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!
            </p>
            <div className="relative border-b border-white/40 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="absolute right-0 top-0 hover:text-accent transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 relative">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-white/70 font-medium text-center lg:text-left">
              © 2026 Skin1004 Egypt Powered by Cosmetics Mall. All Rights Reserved
            </p>
            
            <div className="flex gap-4 items-center">
               {/* Payment Placeholder Icons */}
               <div className="flex gap-2">
                  {["VISA", "PayPal", "MasterCard", "AMEX"].map((p) => (
                    <div key={p} className="h-7 px-2 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold tracking-tighter opacity-80 border border-white/5">
                      {p}
                    </div>
                  ))}
               </div>
               
               <button 
                onClick={scrollToTop}
                className="w-10 h-10 bg-white text-[#7d6e4a] rounded shadow-xl flex items-center justify-center hover:bg-accent hover:text-white transition-all ml-4"
                aria-label="Back to top"
               >
                 <ChevronUp className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
