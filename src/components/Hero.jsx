import Button from "../ui/Button";
import Badge from "../ui/Badge";

function Hero() {
  return (
    <section className="bg-white px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <div className="pt-2">
            {/* Eligibility badge */}
            <Badge className="mb-6">HSA/FSA ELIGIBLe</Badge>
            <Badge tone="dark"></Badge>

            {/* Heading */}
            <h1 className="text-[40px] font-medium leading-[0.95]  text-black sm:text-[60px]">
              Better insights.
              
              <span className="block text-stone-600">Improved health</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-sm  text-black">
              Comprehensive testing designed to help you make more informed
              health decisions.
            </p>

            {/* CTA */}
            <div className="mt-7  w-full" >
              <Button variant="outline">Start Testing</Button>
              
            </div>

            {/* Feature list */}
            <div className="mt-14 max-w-md">
              {/* Feature 1 */}
              <div className="flex items-center gap-3 border-b border-stone-200 py-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9a4d79]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                <p className=" text-black">
                  Comprehensive biomarker analysis for health
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3 border-b border-stone-200 py-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9a4d79]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                <p className="text-black">
                  Personalized insights tailored to your results
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3 py-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9a4d79]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                <p className="text-black">
                  Monitor progress with every test over time
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85"
                alt="Woman exercising"
                className="h-[430px] w-full object-cover sm:h-[500px] lg:h-[540px]"
              />

              {/* Dark overlay for better card visibility */}
              <div className="absolute inset-0 bg-black/10" />

              {/* ECG floating card */}
              <div className="absolute bottom-5 left-5 w-[205px] rounded-xl border border-white/10 bg-black/35 p-4 text-white backdrop-blur-xl sm:bottom-6 sm:left-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-white/70">
                      ECG Rhythm
                    </p>
                    <p className="mt-0.5 text-[8px] text-white/50">
                      HEART HEALTH
                    </p>
                  </div>

                  <Badge tone="dark">OPTIMAL</Badge>
                </div>

                <div className="mt-5">
                  <p className="text-2xl font-medium">
                    4.47
                    <span className="ml-1 text-xs text-white/60">ms</span>
                  </p>

                  <p className="mt-1 max-w-[145px] text-[9px] leading-3 text-white/60">
                    Heart rhythm test results within normal range
                  </p>
                </div>
              </div>

              {/* Small floating status card */}
              <div className="absolute right-5 top-5 rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white backdrop-blur-xl sm:right-6 sm:top-6">
                <p className="text-[8px] uppercase tracking-wider text-white/60">
                  Health Data
                </p>

                <p className="mt-1 text-sm font-medium">Up to date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
