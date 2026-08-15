import { Pill, Leaf, Droplet, FlaskConical } from "lucide-react";
import Button from "../ui/Button";

const cards = [
  {
    icon: Pill,
    title: "Prescriptions",
    description: "Order and manage prescriptions based on your latest test results.",
  },
  {
    icon: Leaf,
    title: "Supplements",
    description: "Get supplement recommendations tailored to your biomarker data.",
  },
  {
    icon: Droplet,
    title: "Endotoxicity",
    description: "Check for markers linked to inflammation and gut health.",
  },
  {
    icon: FlaskConical,
    title: "pH Test",
    description: "Track your body's pH balance as part of your ongoing testing.",
  },
];

function MembershipGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <h2 className="max-w-md text-3xl font-medium tracking-tight md:text-4xl">
          Unlock additional testing as a member
        </h2>

        <div className="flex max-w-sm flex-col items-start gap-4">
          <p className="text-sm text-gray-500">
            Expand your health profile with specialized biomarkers tailored
            to your individual needs.
          </p>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cards.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <Icon size={20} className="text-gray-700" />
            <h3 className="mt-4 text-base font-medium">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MembershipGrid
