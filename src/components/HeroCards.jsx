function HeroCards() {
  return (
    <section className="bg-white mx-auto max-w-7xl px-6 pb-8 lg:px-8">
      <div className="grid gap-3 lg:ml-auto lg:max-w-[640px] sm:grid-cols-2">

        {/* Appointment */}
        <div className="min-h-[120px] rounded-2xl bg-[#111217] p-5 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-wider text-white/40">
                BLOOD TEST
              </p>

              <p className="mt-2 text-[10px] text-white/70">
                Appointment in 24hrs
              </p>
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-xs">
              →
            </div>
          </div>

          <div className="mt-6">
            <p className="text-lg font-medium">
              $50.50
            </p>

            <p className="text-[8px] text-white/40">
              Saved in benefits
            </p>
          </div>
        </div>

        {/* Activity */}
        <div className="min-h-[120px] rounded-2xl bg-[#263d70] p-5 text-white">
          <div className="flex items-center justify-between">
            <p className="text-[8px] uppercase tracking-wider text-white/50">
              ACTIVITY SCORE
            </p>

            <span className="rounded-full bg-white/10 px-2 py-1 text-[7px]">
              OPTIMAL
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-xl font-medium">
                84
              </p>

              <p className="text-[8px] text-white/50">
                Score
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40">
              <span className="text-[10px]">
                100+
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroCards;
