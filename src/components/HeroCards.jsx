import Badge from "../ui/Badge";

function HeroCards() {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
      
      {/* Blood Test Card */}
      <div className="min-w-0 rounded-b-lg bg-black p-3 text-white sm:p-4">
        <p className="text-[8px] uppercase tracking-wider text-white/80 sm:text-[9px]">
          Blood Test
        </p>

        <p className="mt-1 text-[8px] text-white/50 sm:text-[9px]">
          Appointment in 24hrs
        </p>

        <div className="mt-5 flex items-end justify-between gap-2 sm:mt-6">
          
          {/* Small icons */}
          <div className="flex gap-1">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-white/10 sm:h-7 sm:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
                <path d="m16 2 6 6" />
                <path d="M12 16H4" />
              </svg>
            </div>

            <div className="flex h-6 w-6 items-center justify-center rounded bg-white/10 sm:h-7 sm:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12.75 11.25 15 15 9.75" />
                <path d="M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043A3.746 3.746 0 0 1 21 12Z" />
              </svg>
            </div>
          </div>

          {/* Saving */}
          <div className="text-right">
            <p className="text-[7px] text-white/40 sm:text-[8px]">
              Saved $580
            </p>

            <p className="mt-1 text-[8px] text-white/70">
              in benefits
            </p>
          </div>
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