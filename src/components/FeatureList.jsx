import { Sparkles, UserRound, LineChart } from "lucide-react";

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
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 bg-white">
      <div className="max-w-lg">
        {FEATURES.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 border-b border-black/10 py-3"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a64d82]">
              <Icon
                className="h-3 w-3 text-white"
                strokeWidth={2}
              />
            </span>

            <p className="text-sm text-stone">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureList;
