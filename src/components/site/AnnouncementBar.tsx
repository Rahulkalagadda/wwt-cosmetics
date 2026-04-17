const messages = [
  "Premium Korean Skincare Wholesale & Retail",
  "Buy One Get One Free On Selected Items",
  "Shipment within 24 hours — Global Delivery",
  "100% Authentic Products — Quality Guaranteed",
];

export const AnnouncementBar = () => {
  const items = [...messages, ...messages, ...messages];
  return (
    <div className="bg-[#2a3127] text-white/90 overflow-hidden border-b border-white/5">
      <div className="flex marquee whitespace-nowrap py-3">
        {items.map((m, i) => (
          <span key={i} className="font-sans-luxe mx-8 flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.1em]">
            {m}
            <span className="text-white/40 text-lg leading-none mt-0.5">✧</span>
          </span>
        ))}
      </div>
    </div>
  );
};
