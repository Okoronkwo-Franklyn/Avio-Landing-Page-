// Simple bar chart data - just numbers, rendered as div heights below.
const barData = [40, 65, 30, 80, 55, 70];

export default function Insights() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-lg text-center text-3xl font-medium tracking-tight md:text-4xl">
          Insights that keep your health moving
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left panel: image with floating stat cards */}
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
              alt="Person exercising in a dark, blue-lit environment"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex gap-3">
              <div className="flex-1 rounded-xl bg-white/10 px-3 py-2 backdrop-blur">
                <p className="text-[11px] text-gray-300">Emily Rasmussen</p>
                <p className="text-xs font-medium">Apr 12</p>
              </div>
              <div className="flex-1 rounded-xl bg-white/10 px-3 py-2 backdrop-blur">
                <p className="text-[11px] text-gray-300">Blood Sugar Level</p>
                <p className="text-xs font-medium">98 mg/dL</p>
              </div>
            </div>
          </div>

          {/* Right panel: health profile widget */}
          <div className="rounded-3xl bg-gray-900 p-6">
            <h3 className="text-lg font-medium">
              Data that puts your health in motion
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              See how the specialists you work with stay connected to your
              data, instead of it sitting siloed.
            </p>

            <p className="mt-6 text-xs uppercase tracking-wide text-gray-500">
              Your Health Profile
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Avio Health Score</span>
                  <span>72</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-700">
                  <div className="h-2 w-[72%] rounded-full bg-blue-400" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Vitals</span>
                  <span>88.3%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-700">
                  <div className="h-2 w-[88%] rounded-full bg-green-400" />
                </div>
              </div>
            </div>

            {/* Bar chart built from plain divs, heights come from barData */}
            <div className="mt-6 flex h-20 items-end gap-2">
              {barData.map((height, index) => (
                <div
                  key={index}
                  className="w-full rounded-t bg-green-400/70"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
