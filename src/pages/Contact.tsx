import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { MapPin, Phone, Mail } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const Contact = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
      <Navbar />

      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans-luxe text-accent mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl">Contact Us</h1>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white p-8 md:p-10 shadow-card rounded-2xl border border-black/5">
            <h2 className="font-display text-2xl mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2">Full Name</label>
                <input type="text" className="w-full border-b border-black/20 pb-2 focus:border-black focus:outline-none transition-colors bg-transparent" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2">Email Address</label>
                <input type="email" className="w-full border-b border-black/20 pb-2 focus:border-black focus:outline-none transition-colors bg-transparent" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-black/20 pb-2 focus:border-black focus:outline-none transition-colors bg-transparent resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-black text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-black/80 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-2">Headquarters</h3>
                <p className="text-foreground/70 font-light text-sm">Premium Beauty Hub<br/>Global Distribution Center</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-2">Phone / WhatsApp</h3>
                <p className="text-foreground/70 font-light text-sm">+91 85209 38870</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-2">Email</h3>
                <p className="text-foreground/70 font-light text-sm">info@digitalrise.marketing</p>
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

export default Contact;
