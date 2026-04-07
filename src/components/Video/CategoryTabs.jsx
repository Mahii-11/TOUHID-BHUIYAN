export function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              relative px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300
              ${isActive ? "text-white" : "text-slate-400 hover:text-white"}
            `}
            style={{
              background: isActive
                ? "linear-gradient(135deg, rgba(99,102,241,0.8) 0%, rgba(139,92,246,0.8) 100%)"
                : "rgba(255,255,255,0.04)",
              border: isActive
                ? "1px solid rgba(139,92,246,0.8)"
                : "1px solid rgba(255,255,255,0.08)",
              boxShadow: isActive
                ? "0 0 18px rgba(139,92,246,0.45), inset 0 0 12px rgba(139,92,246,0.1)"
                : "none",
            }}
          >
            {isActive && (
              <span
                className="absolute inset-0 rounded-full opacity-30 animate-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.6) 0%, rgba(139,92,246,0.6) 100%)",
                }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}