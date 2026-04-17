import { Home, Grid, Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "@/context/StoreContext";

export const MobileNav = () => {
  const { cart, wishlist } = useStore();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-black/5 lg:hidden pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16 px-2">
        <Link to="/" className="flex flex-col items-center justify-center gap-1 text-foreground hover:text-foreground transition-colors w-14 h-full">
          <Home className="w-[22px] h-[22px] stroke-[1.5]" />
          <span className="text-[9px] font-bold tracking-tight">Home</span>
        </Link>
        <Link to="/shop" className="flex flex-col items-center justify-center gap-1 text-foreground/40 hover:text-foreground transition-colors w-14 h-full">
          <Grid className="w-[22px] h-[22px] stroke-[1.5]" />
          <span className="text-[9px] font-bold tracking-tight">Shop</span>
        </Link>
        <Link to="/wishlist" className="flex flex-col items-center justify-center gap-1 text-foreground/40 hover:text-foreground transition-colors w-14 h-full relative">
          <div className="relative">
            <Heart className="w-[22px] h-[22px] stroke-[1.5]" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-[#d01c1c] text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center border border-white animate-in zoom-in duration-300">
                {wishlist.length}
              </span>
            )}
          </div>
          <span className="text-[9px] font-bold tracking-tight">Wishlist</span>
        </Link>
        <Link to="/cart" className="flex flex-col items-center justify-center gap-1 text-foreground/40 hover:text-foreground transition-colors w-14 h-full relative">
          <div className="relative">
             <ShoppingBag className="w-[22px] h-[22px] stroke-[1.5]" />
             {cart.length > 0 && (
               <span className="absolute -top-1 -right-1.5 bg-[#d01c1c] text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center border border-white animate-in zoom-in duration-300">
                 {cart.length}
               </span>
             )}
          </div>
          <span className="text-[9px] font-bold tracking-tight">Cart</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center justify-center gap-1 text-foreground/40 hover:text-foreground transition-colors w-14 h-full">
          <User className="w-[22px] h-[22px] stroke-[1.5]" />
          <span className="text-[9px] font-bold tracking-tight">Account</span>
        </Link>
      </div>
    </nav>
  );
};
