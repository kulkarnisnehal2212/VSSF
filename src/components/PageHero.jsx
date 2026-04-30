export default function PageHero({ label, title, highlight, subtitle, image, objectPosition = "right top", actions }) {
  return (
    <section className="relative w-full h-[52vh] min-h-[340px] flex items-end overflow-hidden">

      {/* BG IMAGE — shifted right so subject is visible, text sits on left overlay */}
      <img
        src={image}
        alt={title}
        style={{ objectPosition }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* LAYERED OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/80 to-[var(--color-primary)]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* DECORATIVE VERTICAL LINE */}
      <div className="absolute left-[42%] top-0 h-full w-px bg-white/5 hidden lg:block" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-12">

        {/* LABEL PILL */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
          <span className="text-white/80 text-[11px] uppercase tracking-[0.2em] font-medium">
            {label}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="heading-font text-3xl md:text-5xl font-semibold text-white leading-tight max-w-[640px] mb-3">
          {title}
          {highlight && (
            <span className="text-[var(--color-secondary)]"> {highlight}</span>
          )}
        </h1>

        {/* SUBTITLE */}
        {subtitle && (
          <p className="text-white/65 text-sm md:text-base max-w-[480px] leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* BOTTOM ACCENT LINE */}
        <div className="mt-6 flex items-center gap-3">
          <span className="w-10 h-[2px] bg-[var(--color-secondary)]" />
          <span className="w-4 h-[2px] bg-white/30" />
          <span className="w-2 h-[2px] bg-white/15" />
        </div>

        {/* ACTIONS */}
        {actions && (
          <div className="mt-6 flex flex-wrap gap-3">
            {actions}
          </div>
        )}

      </div>
    </section>
  );
}
