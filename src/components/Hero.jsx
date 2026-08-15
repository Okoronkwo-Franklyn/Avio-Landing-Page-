import Badge from "../ui/Badge";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 pt-10 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT */}
        <div>
          <Badge>HSA/FSA ELIGIBLE</Badge>

          <h1 className="mt-5 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-ink md:text-6xl">
            Better insights.
            <br />
            <span className="text-stone">Improved health.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-6 text-stone">
            Comprehensive testing designed to help you make more informed
            health decisions.
          </p>

          <Button variant="black" className="mt-7">
            Start Testing
          </Button>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative h-[390px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=85"
              alt="Person exercising"
              className="h-full w-full object-cover"
            />

            {/* Small translucent card 1 */}
            <div className="absolute right-4 top-4 rounded-xl bg-black/30 px-4 py-3 text-white backdrop-blur-md">
              <p className="text-[9px] uppercase tracking-wider text-white/60">
                ECG Rhythm
              </p>
              <p className="mt-1 text-xs font-medium">
                OPTIMAL
              </p>
            </div>

            {/* Small translucent card 2 */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-black/40 px-4 py-3 text-white backdrop-blur-md">
              <p className="text-[9px] uppercase tracking-wider text-white/60">
                BLOOD TEST
              </p>
              <p className="mt-1 text-lg font-medium">
                4.47 <span className="text-xs">mg</span>
              </p>
              <p className="text-[8px] text-white/50">
                Biomarker analysis
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;