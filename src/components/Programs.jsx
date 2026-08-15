import { ArrowRight } from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Healthy Aging",
    description:
      "Track biological changes and support healthier aging with actionable insights.",
    gradient: "from-emerald-200 via-emerald-400 to-gray-500",
  },
  {
    number: "02",
    title: "Metabolic Health",
    description:
      "Gain deeper insight into blood sugar, cholesterol and metabolic function.",
    gradient: "from-pink-300 via-purple-400 to-purple-600",
  },
  {
    number: "03",
    title: "Weight loss",
    description:
      "Build a stronger understanding of your overall health while monitoring factors relevant to weight management.",
    gradient: "from-sky-300 via-blue-500 to-blue-700",
  },
];

export default function Programs() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          Programs
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
          Programs designed around your health priorities
        </h2>
      </div>

      <div className="relative mt-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.number} className="rounded-3xl bg-black p-6 text-white">
              <p className="text-xs text-gray-400">{program.number}</p>

              {/* Soft gradient circle - stands in for the abstract artwork,
                  built with Tailwind instead of an image */}
              <div
                className={`mx-auto my-8 h-32 w-32 rounded-full bg-gradient-to-br ${program.gradient} blur-[2px]`}
              />

              <h3 className="text-lg font-medium">{program.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Carousel arrow, decorative only on this static build */}
        <button
          className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow md:flex"
          aria-label="Next program"
        >
          <ArrowRight size={16} />
        </button>
      </div>

      <p className="mx-auto mt-10 max-w-md text-center text-sm text-gray-500">
        Choose a testing pathway aligned with your goals, whether you're
        improving wellness, optimizing performance, or planning for long-term
        health.
      </p>
    </section>
  );
}
