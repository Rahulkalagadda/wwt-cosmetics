import { Package, CreditCard, RotateCcw, Headset } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  { icon: Package, title: "Free Shipping", text: "You will love at great low prices" },
  { icon: CreditCard, title: "Flexible Payment", text: "Pay with Multiple Credit Cards" },
  { icon: RotateCcw, title: "14 Day Returns", text: "Within 14 days for an exchange" },
  { icon: Headset, title: "Premium Support", text: "Outstanding premium support" },
];

export const TrustBar = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-16 bg-[#f7f7f7] border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {items.map((it, i) => (
          <div key={it.title} className="reveal flex items-center gap-5 translate-y-4 opacity-0" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
              <it.icon className="w-6 h-6 text-black" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-sans-luxe text-[13px] font-bold text-foreground leading-tight tracking-tight">{it.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5 font-medium">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
