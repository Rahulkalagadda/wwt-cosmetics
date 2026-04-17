import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface Product {
  name: string;
  price: number;
  image: string;
  category?: string;
}

interface StoreContextType {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (name: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("exp_cart");
    const savedWishlist = localStorage.getItem("exp_wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("exp_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("exp_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.info("Item removed from cart");
  };

  const addToWishlist = (product: Product) => {
    if (wishlist.find((item) => item.name === product.name)) {
      toast.info("Item is already in your wishlist!");
      return;
    }
    setWishlist((prev) => [...prev, product]);
    toast.success(`${product.name} added to wishlist!`);
  };

  const removeFromWishlist = (name: string) => {
    setWishlist((prev) => prev.filter((item) => item.name !== name));
    toast.info("Item removed from wishlist");
  };

  return (
    <StoreContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
};
