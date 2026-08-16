import { Sparkles, UserRound, LineChart, Activity, CalendarCheck, Wallet } from "lucide-react";

// ── content ──────────────────────────────────────────────────────────────

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

// Ring math for the activity-score card. 100+ is treated as a full ring;
// the value below it is what's actually rendered.
const ACTIVITY_SCORE = 84;
const RING_RADIUS = 26;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const RING_OFFSET = RING_CIRCUMFERENCE * (1 - ACTIVITY_SCORE / 100);

function Hero() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 pb-16 pt-8 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* ── left: copy, CTA, feature list ─────────────────────────── */}
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center rounded-full border border-black/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-black">
            HSA / FSA eligible
          </span>

          <h1 className="text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-black">Better insights.</span>
            <br />
            <span className="text-black">Improved health.</span>
          </h1>

          <p className="mt-5 max-w-sm text-sm text-stone">
            Comprehensive testing designed to help you make more informed
            health decisions.
          </p>

          <button
            type="button"
            className="bg-black text-white mt-7 w-fit rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Start Testing
          </button>

          <div className="mt-10 max-w-md">
            {FEATURES.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="row-divider flex items-center gap-4 py-4"
              >
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-black/[0.04]">
                  <Icon className="h-3.5 w-3.5 text-ink" strokeWidth={1.75} />
                </span>
                <p className="text-sm text-black">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── right: portrait + floating readout cards ──────────────── */}
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-stone-800 via-stone-900 to-black">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
              alt="Person mid-motion, backlit against a dark studio background"
              className="h-full w-full object-cover"
            />
          </div>

          {/* ECG readout, floats over the top-left of the portrait */}
          <div className="absolute left-4 top-6 w-48 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink">
                <Activity className="h-3 w-3" strokeWidth={2} />
                ECG Rhythm
              </span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-emerald-600">
                Optimal
              </span>
            </div>
            <p className="mt-1 text-lg font-medium text-ink">122 bpm</p>
          </div>

          {/* notification toast, floats over the bottom-left of the portrait */}
          <div className="absolute bottom-4 left-4 w-56 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur">
            <p className="text-xs font-medium text-ink">
              At-home blood test results have arrived
            </p>
            <p className="mt-0.5 text-[10px] text-stone">Nov 3, 2025</p>
          </div>
        </div>
      </div>

      {/* ── bottom row: appointment + activity score ────────────────── */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:ml-auto lg:max-w-md">
        {/* Card 01 — upcoming test + what it saved */}
        <div className="rounded-2xl border border-black/[0.08] bg-black p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.04]">
              <CalendarCheck className="h-3.5 w-3.5 text-ink" strokeWidth={1.75} />
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.04]">
              <Wallet className="h-3.5 w-3.5 text-ink" strokeWidth={1.75} />
            </span>
          </div>
          <p className="mt-4 text-xs font-medium text-ink">Blood test</p>
          <p className="text-[11px] text-stone">Appointment in 24hrs</p>
          <p className="mt-3 text-[11px] text-stone">
            Saved <span className="font-medium text-ink">$580.00</span> with
            benefits
          </p>
        </div>

        {/* Card 02 — activity score progress ring */}
        <div className="rounded-2xl bg-ink p-4 text-white bg-blue-400">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Activity score</span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide">
              Optimal
            </span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <svg
              viewBox="0 0 64 64"
              className="h-14 w-14 flex-none -rotate-90"
            >
              <circle
                cx="32"
                cy="32"
                r={RING_RADIUS}
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="5"
              />
              <circle
                cx="32"
                cy="32"
                r={RING_RADIUS}
                fill="none"
                stroke="#7dd3fc"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={RING_CIRCUMFERENCE}
                strokeDashoffset={RING_OFFSET}
              />
            </svg>
            <div>
              <p className="text-xl font-medium">{ACTIVITY_SCORE}</p>
              <p className="text-[10px] text-white/60">12 out of range</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
