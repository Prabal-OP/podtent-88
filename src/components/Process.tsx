import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description: "We learn about your business goals and target audience",
  },
  {
    title: "Strategy",
    description: "Develop content strategy and guest outreach plan",
  },
  {
    title: "Production",
    description: "Professional recording and post-production",
  },
  {
    title: "Distribution",
    description: "Podcast publishing and content repurposing",
  },
];

export const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors"
            >
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};