import { Sparkles, UserRound, LineChart } from "lucide-react";

// Three horizontal rows: icon, copy, thin divider. Sits directly under
// the hero copy in the reference, so it stays narrow and left-aligned
// rather than spanning the full page width.
const FEATURES = [
  {
    icon: Sparkles,
    text: "Comprehensive biomarker analysis for health",
  },
  {
    icon: UserRound,
    text: "Personalized insights tailored to your results",
  },
  {
    icon: LineChart,
    text: "Monitor progress with every test over time",
  },
];

function FeatureList() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-md">
        {FEATURES.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="row-divider flex items-center gap-4 py-4"
          >
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-black/[0.04]">
              <Icon className="h-3.5 w-3.5 text-ink" strokeWidth={1.75} />
            </span>
            <p className="text-sm text-stone">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureList
