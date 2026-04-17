export const HeroMarquee = () => {
  const messages = [
    "Free express shipping all over egypt",
    "Buy One Get One Free On beauty Products",
    "Free express shipping all over egypt",
    "Buy One Get One Free On beauty Products",
  ];
  const items = [...messages, ...messages, ...messages];
  
  return (
    <div className="bg-[#7d6e4a] text-white overflow-hidden py-3 border-y border-white/5">
      <div className="flex marquee whitespace-nowrap">
        {items.map((m, i) => (
          <span key={i} className="mx-12 flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] font-sans">
            {m}
            <span className="text-white/50 text-xl leading-none font-normal relative -top-0.5">✧</span>
          </span>
        ))}
      </div>
    </div>
  );
};
