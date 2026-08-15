// Small pill-style label. Used for the "HSA/FSA ELIGIBLE" eyebrow in the
// hero, the "OPTIMAL" / "OUT OF RANGE" status tags on the floating data
// cards, and similar tiny status chips throughout the design.
const TONES = {
  neutral: "bg-black/[0.04] text-stone",
  dark: "bg-white/10 text-white",
  success: "bg-emerald-500/10 text-emerald-600",
  warning: "bg-rose-500/10 text-rose-500",
};

function Badge({ children, tone = "neutral", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge
