import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "The podcast production quality is exceptional. They've helped us establish thought leadership in our industry.",
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content: "Professional, reliable, and creative. They transformed our ideas into engaging podcast content.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 hover:shadow-lg transition-shadow">
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};