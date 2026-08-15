import Badge from "../ui/Badge";

function HeroCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:ml-auto lg:max-w-md">
        <div>
          {/* Card 01 — appointment / savings goes here */}Hero Card
        </div>
      </div>

      {/* Activity Score Card */}
      <div className="min-w-0 rounded-b-lg bg-[#263b68] p-3 text-white sm:p-4">
        <p className="text-[8px] uppercase tracking-wider sm:text-[9px]">
          Activity Score
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">

          {/* Score information */}
          <div className="min-w-0 space-y-1">
            
            <div className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 sm:gap-2">
              <span className="text-[8px] sm:text-[9px]">
                84
              </span>

              <Badge
                tone="dark"
                className="px-1 py-0.5 text-[5px] sm:px-1.5 sm:text-[6px]"
              >
                OPTIMAL
              </Badge>
            </div>

            <div className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 sm:gap-2">
              <span className="text-[8px] sm:text-[9px]">
                12
              </span>

              <span className="text-[5px] text-white/50 sm:text-[6px]">
                OUT OF RANGE
              </span>
            </div>
          </div>

          {/* Circular Score */}
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[4px] border-white/10 sm:h-14 sm:w-14 sm:border-[5px]">
            
            <div className="absolute inset-[-4px] rotate-45 rounded-full border-[4px] border-transparent border-t-blue-300 border-r-blue-300 sm:inset-[-5px] sm:border-[5px]" />

            <div className="text-center">
              <p className="text-[10px] font-medium sm:text-xs">
                100+
              </p>

              <p className="text-[5px] text-white/50 sm:text-[6px]">
                Score
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default HeroCards;