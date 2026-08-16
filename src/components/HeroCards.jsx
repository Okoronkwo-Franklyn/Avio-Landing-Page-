function HeroCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      

      {/* Activity Score Card */}
      <div className="min-w-0 rounded-b-lg bg-[#263b68] p-3 text-white sm:p-4">
        <p className="text-[8px] uppercase tracking-wider sm:text-[9px]">
          Activity Score
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">

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

    </section>
  );
}

export default HeroCards;
