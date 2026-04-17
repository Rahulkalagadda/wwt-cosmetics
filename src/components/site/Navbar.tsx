import { useEffect, useState } from "react";
import { Search, ShoppingBag, Heart, User, ChevronDown, Menu, X } from "lucide-react";
import badge from "@/assets/logo-badge.jpg";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Shop", 
    href: "/shop", 
    hasMegaMenu: true 
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact us", href: "/contact" },
];

const shopMenu = {
  featured: ["All Products", "Best Sellers", "New Arrivals", "Save with Sets"],
  productType: ["Ampoule / Serum", "Cleanser", "Cream", "Sunscreen", "Toner / Mist"],
  productLine: [
    { left: "Ampoule & Serums", right: "Centella Collection" },
    { left: "Creams & Moisturizers", right: "Skincare Sets" },
    { left: "Sunscreen", right: "Toners & Mists" }
  ]
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showShop, setShowShop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm h-16 lg:h-16" 
          : "bg-white h-16 lg:h-20"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex items-center gap-4">
          <button onClick={() => setOpen(true)} className="lg:hidden p-2 hover:text-accent transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <a href="#" className="flex items-center gap-3 transition-all hover:opacity-80">
            <img 
              src={badge} 
              alt="Beauty Supply" 
              className="h-8 lg:h-10 w-auto object-contain"
            />
            <span className="font-sans font-black text-[18px] lg:text-[22px] tracking-tight uppercase text-black">
              WWT COSMETICS
            </span>
          </a>
        </div>

        {/* Links - Center */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10 h-full">
          {links.map((l) => (
            <li 
              key={l.name} 
              className="h-full flex items-center"
              onMouseEnter={() => l.hasMegaMenu && setShowShop(true)}
              onMouseLeave={() => l.hasMegaMenu && setShowShop(false)}
            >
              <a
                href={l.href}
                className={`font-sans text-[13px] font-bold transition-colors flex items-center gap-1 group py-4 relative ${
                  showShop && l.hasMegaMenu ? "text-black border-b-2 border-black" : "text-foreground/80 hover:text-black"
                }`}
              >
                {l.name}
                {l.hasMegaMenu && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Utilities - Right */}
        <div className="flex items-center gap-3 lg:gap-5">
          <button className="p-1.5 hover:text-accent transition-colors" aria-label="Search">
            <Search className="w-[19px] h-[19px] stroke-[2]" />
          </button>
          <button className="p-1.5 hover:text-accent transition-colors hidden md:block" aria-label="Account">
            <User className="w-[19px] h-[19px] stroke-[2]" />
          </button>
          <button className="p-1.5 hover:text-accent transition-colors relative" aria-label="Wishlist">
            <Heart className="w-[19px] h-[19px] stroke-[2]" />
            <span className="absolute -top-0 -right-0.5 bg-[#d01c1c] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
              0
            </span>
          </button>
          <button className="p-1.5 hover:text-accent transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-[19px] h-[19px] stroke-[2]" />
            <span className="absolute -top-0 -right-0.5 bg-[#d01c1c] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
              0
            </span>
          </button>
        </div>
      </nav>

      {/* Mega Menu - Shop */}
      <div 
        className={`absolute left-0 w-full bg-white border-b border-black/5 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
          showShop ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
        onMouseEnter={() => setShowShop(true)}
        onMouseLeave={() => setShowShop(false)}
      >
        <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-12 gap-8 border-t border-black">
          {/* Featured */}
          <div className="col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-foreground/40 uppercase mb-8 pb-3 border-b border-black/5">Featured</h4>
            <ul className="space-y-3.5">
              {shopMenu.featured.map(item => (
                <li key={item}>
                  <a href="#" className="text-[14px] font-medium text-foreground hover:text-accent transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="w-px h-full bg-black/5" />
          </div>

          {/* Product Type */}
          <div className="col-span-3">
            <h4 className="text-[9px] font-bold tracking-[0.25em] text-foreground/45 uppercase mb-8 pb-3 border-b border-black/5">Product Type</h4>
            <ul className="space-y-3.5">
              {shopMenu.productType.map(item => (
                <li key={item}>
                  <a href="#" className="text-[14px] font-medium text-foreground/70 hover:text-black transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="w-px h-full bg-black/5" />
          </div>

          {/* Product Line */}
          <div className="col-span-4">
            <h4 className="text-[9px] font-bold tracking-[0.25em] text-foreground/45 uppercase mb-8 pb-3 border-b border-black/5">Product Line</h4>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-3.5">
                {shopMenu.productLine.map(item => (
                  <li key={item.left}>
                    <a href="#" className="text-[14px] font-medium text-foreground/70 hover:text-black transition-colors block">{item.left}</a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3.5">
                {shopMenu.productLine.map(item => (
                  <li key={item.right}>
                    <a href="#" className="text-[14px] font-medium text-foreground/70 hover:text-black transition-colors block">{item.right}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute left-0 top-0 bottom-0 w-[85vw] max-w-sm bg-white overflow-y-auto transition-transform duration-500 ease-luxe shadow-2xl ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="sticky top-0 bg-white z-10 p-6 flex items-center justify-between border-b border-black/5">
            <div className="flex items-center gap-2">
              <img src={badge} alt="" className="h-7 w-auto" />
              <span className="font-sans font-black text-sm tracking-tight">WWT COSMETICS</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 hover:rotate-90 transition-transform duration-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 pb-20">
            {/* Search - Mobile */}
            <div className="relative mb-10">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input 
                type="text" 
                placeholder="Search premium skincare..." 
                className="w-full bg-[#f8f8f8] py-3.5 pl-10 pr-4 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black/5"
              />
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {links.map((l) => (
                <div key={l.name} className="border-b border-black/5 py-2">
                  <button 
                    onClick={() => l.hasMegaMenu ? setShowShop(!showShop) : setOpen(false)}
                    className="w-full flex items-center justify-between py-3 text-[15px] font-bold tracking-tight text-foreground hover:text-black"
                  >
                    <span className="uppercase">{l.name}</span>
                    {l.hasMegaMenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showShop ? "rotate-180" : ""}`} />
                    )}
                  </button>
                  
                  {l.hasMegaMenu && showShop && (
                    <div className="pl-4 py-4 space-y-6 animate-fadeSlide">
                      <div>
                        <h4 className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-4">Featured</h4>
                        <ul className="space-y-4">
                          {shopMenu.featured.map(item => (
                            <li key={item}><a href="#" className="text-sm font-medium text-foreground/70">{item}</a></li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-4">Product Line</h4>
                        <ul className="space-y-4">
                          {shopMenu.productLine.map(item => (
                            <li key={item.left}><a href="#" className="text-sm font-medium text-foreground/70">{item.left}</a></li>
                          ))}
                          {shopMenu.productLine.map(item => (
                            <li key={item.right}><a href="#" className="text-sm font-medium text-foreground/70">{item.right}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Footer Area */}
            <div className="mt-12 pt-12 border-t border-black/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest leading-none mb-1">Account</p>
                  <p className="text-sm font-bold">Login / Register</p>
                </div>
              </div>
              
              <div className="space-y-1 text-sm font-medium text-foreground/60">
                <p>Support: info@wwtcosmetics.com</p>
                <p>Worldwide Shipping Available</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};
