import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, Minus, Plus, Heart, Shuffle, ArrowUpRight, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

interface QuickViewProps {
  product: {
    name: string;
    price: number | string;
    image: string;
    category?: string;
    description?: string;
  };
  children: React.ReactNode;
}

export const QuickView = ({ product, children }: QuickViewProps) => {
  const [quantity, setQuantity] = useState(1);
  const price = typeof product.price === 'number' ? product.price : parseInt(product.price.toString().replace(/[^0-9]/g, '')) || 0;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white border-none rounded-none gap-0">
        <div className="flex flex-col md:flex-row h-screen md:h-auto max-h-[90vh] overflow-y-auto md:overflow-hidden">
          {/* Left: Product Images */}
          <div className="flex-1 relative bg-[#f7f7f7] group/modal">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center opacity-0 group-hover/modal:opacity-100 transition-opacity">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center opacity-0 group-hover/modal:opacity-100 transition-opacity">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Details */}
          <div className="flex-1 p-8 md:p-12 flex flex-col overflow-y-auto">
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">
                Category: <span className="text-muted-foreground font-normal">{product.category || "Uncategorized"}</span>
              </p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">{product.name}</h2>
              <div className="inline-flex items-center px-3 py-1 border border-black text-[10px] font-bold uppercase tracking-widest mb-6">
                In Stock
              </div>
              <p className="text-2xl font-bold mb-6">{price.toLocaleString(undefined, { minimumFractionDigits: 2 })} AED</p>
              
              <p className="text-sm text-foreground/80 leading-relaxed mb-8">
                {product.description || "A balanced, hydrating moisturizer enriched with Madagascar Centella and Hyaluronic Acid that deeply nourishes without heaviness, leaving skin soft, supple, and protected all day."}
              </p>
            </div>

            <div className="mt-auto space-y-6">
              {/* Quantity */}
              <div className="flex items-center w-32 h-12 bg-[#f4f4f4] rounded-sm px-2">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center hover:text-accent transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-bold text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-8 h-8 flex items-center justify-center hover:text-accent transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-black text-white h-14 flex items-center justify-center gap-2 uppercase text-[11px] font-bold tracking-widest hover:bg-black/90 transition-all">
                  Add to cart — {(price * quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })} AED
                </button>
                <button className="w-14 h-14 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-14 h-14 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <Shuffle className="w-5 h-5" />
                </button>
              </div>

              <button className="w-full h-14 bg-[#d01c1c] text-white flex items-center justify-center gap-2 uppercase text-[11px] font-bold tracking-widest hover:bg-[#b01818] transition-all">
                BUY IT NOW <ArrowUpRight className="w-4 h-4" />
              </button>

              <a href="#" className="flex items-center justify-start gap-1 text-[11px] font-bold uppercase tracking-widest hover:text-accent transition-colors underline underline-offset-4">
                View full details <ArrowUpRight className="w-3 h-3" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
