import { CheckCircle, FileText, Users } from "lucide-react";
import Button from "../ui/Button";

const features = [
  {
    icon: CheckCircle,
    title: "Comprehensive testing (Core)",
    description: "100+ biomarkers · Test in 2,000+ labs nationwide",
  },
  {
    icon: FileText,
    title: "In-depth insights & action plan",
    description: "Expert-designed protocols, nutrition and supplements",
  },
  {
    icon: Users,
    title: "1:1 Consultation",
    description: "Talk with a dedicated care team to review your results",
  },
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left: heading, CTA, feature rows */}
        <div>
          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Premium care.
            <br />
            No premium price.
          </h2>

          <p className="mt-4 max-w-sm text-gray-500">
            Access advanced lab testing without unnecessary costs, through
            flexible plans designed for preventive health.
          </p>

          <Button variant="primary" className="mt-6 w-fit">
            View Membership
          </Button>

          <div className="mt-10 divide-y divide-gray-100 border-t border-gray-100">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3 py-4">
                <Icon size={18} className="mt-0.5 shrink-0 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-800">{title}</p>
                  <p className="text-xs text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image with floating result cards */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80"
              alt="Close-up lifestyle photo with soft pink lighting"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <p className="text-xs font-medium text-gray-800">Test Results</p>
            <p className="text-xs text-gray-400">100+ biomarkers</p>
          </div>

          <div className="absolute bottom-6 right-6 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <p className="text-xs font-medium text-gray-800">Your Results →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
