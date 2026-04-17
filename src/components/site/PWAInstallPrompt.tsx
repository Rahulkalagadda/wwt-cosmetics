import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";

export const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Only show if not already installed (standalone mode is false)
    if (window.matchMedia("(display-mode: standalone)").matches) {
      return;
    }

    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setTimeout(() => setShowPrompt(true), 3500);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-24 lg:bottom-auto lg:top-4 left-4 right-4 lg:left-auto lg:right-4 lg:w-96 z-[120] animate-in slide-in-from-bottom lg:slide-in-from-top fade-in duration-500">
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.2)] p-4 lg:p-5 border border-black/5 flex items-start gap-4 ring-1 ring-black/5">
        <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-display text-xl flex-shrink-0 font-bold shadow-inner">
          EXP
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <h3 className="font-bold text-sm tracking-tight text-black mb-1">Install EXP App</h3>
          <p className="text-[11px] text-foreground/70 leading-relaxed font-medium">
            Add to your home screen for quick access to premium wholesale skincare and exclusive alerts.
          </p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleInstallClick}
              className="flex-1 py-2.5 bg-black text-white text-[11px] font-bold tracking-widest uppercase rounded-lg hover:bg-black/80 transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95"
            >
              <Download className="w-3.5 h-3.5" /> Install
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="flex-1 py-2.5 bg-[#f4f4f4] text-black text-[11px] font-bold tracking-widest uppercase rounded-lg hover:bg-gray-200 transition-all active:scale-95"
            >
              Later
            </button>
          </div>
        </div>
        <button 
          onClick={() => setShowPrompt(false)} 
          className="text-foreground/40 hover:text-black transition-colors -mt-1 -mr-1 p-1"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
