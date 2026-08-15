import { Pill, Leaf, Droplets, FlaskConical } from "lucide-react";
import Button from "../ui/Button";

const tests = [
  {
    icon: Pill,
    title: "Prescriptions",
    description:
      "Order and manage prescriptions based on your latest test results.",
    dark: true,
  },
  {
    icon: Leaf,
    title: "Supplements",
    description:
      "Get supplement recommendations tailored to your biomarker data.",
  },
  {
    icon: Droplets,
    title: "Endotoxity",
    description:
      "Check for markers linked to inflammation and gut health.",
  },
  {
    icon: FlaskConical,
    title: "pH Test",
    description:
      "Track your body's pH balance as part of your ongoing testing.",
  },
];

export default function MembershipGrid() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading area */}
        <div className="grid items-end gap-8 md:grid-cols-2">
          <div>
            <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-ink md:text-5xl text-black">
              Unlock additional testing
              <br />
              as a member
            </h2>
          </div>

          <div className="max-w-sm md:ml-auto">
            <p className="text-sm leading-5 text-stone">
              Expand your health profile with specialized biomarkers
              tailored to your individual needs.
            </p>

            <Button variant="black" className="mt-6">
              Get Started
            </Button>
          </div>
        </div>

        {/* Testing cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {tests.map(
            ({ icon: Icon, title, description, dark }) => (
              <div
                key={title}
                className={`group relative min-h-[155px] overflow-hidden rounded-2xl p-6 ${
                  dark
                    ? "bg-gradient-to-br from-[#18251f] via-[#101512] to-black text-white"
                    : "bg-[#f3f4f5] text-ink"
                }`}
              >
                {dark && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-emerald-900/30" />
                )}

                <div className="relative z-10">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      dark
                        ? "bg-white/10 text-white"
                        : "bg-white text-ink"
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </div>

                  <div className="mt-6">
                    <h3
                      className={`text-base font-medium ${
                        dark ? "text-white" : "text-ink"
                      }`}
                    >
                      {title}
                    </h3>

                    <p
                      className={`mt-2 max-w-md text-xs leading-5 ${
                        dark ? "text-white/60" : "text-stone"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
