function HeroCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8 bg-white">
      <div className="grid gap-4 lg:ml-auto lg:max-w-[640px] lg:grid-cols-2">

        {/* Appointment / Savings */}
        <div className="rounded-2xl bg-[#111217] p-5 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-wider text-white/40">
                Blood Test
              </p>

              <p className="mt-2 text-xs text-white/70">
                Appointment in 24hrs
              </p>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              →
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xl font-medium">
              $50.50
            </p>

            <p className="mt-1 text-[9px] text-white/40">
              Saved in benefits
            </p>
          </div>
        </div>

        {/* Activity Score */}
        <div className="rounded-2xl bg-[#263d70] p-5 text-white">
          <div className="flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-wider text-white/50">
              Activity Score
            </p>

            <span className="rounded-full bg-white/10 px-2 py-1 text-[8px]">
              OPTIMAL
            </span>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-2xl font-medium">
                84
              </p>

              <p className="text-[9px] text-white/50">
                Score
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40">
              <span className="text-xs font-medium">
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
