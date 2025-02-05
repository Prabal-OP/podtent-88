import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const PreviousWorks = () => {
  const works = [
    {
      id: 1,
      logo: "/lovable-uploads/486305cf-9db2-43b2-9795-cbd833c489dd.png",
      company: "Edison OS",
      description: "Produced a monthly tech podcast series featuring industry leaders, reaching over 50,000 monthly listeners. Managed end-to-end production including guest coordination and content strategy.",
    },
    {
      id: 2,
      logo: "/placeholder.svg",
      company: "Sensibull",
      description: "One Trading Mistake with Sensibull - Where we ask people about their single biggest trading mistake and the lessons learnt from it.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Previous Works</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {works.map((work) => (
            <Card key={work.id} className="w-full max-w-sm bg-white shadow-lg animate-fadeIn">
              <CardHeader className="flex items-center justify-center p-6">
                <img
                  src={work.logo}
                  alt={`${work.company} Logo`}
                  className="h-24 w-auto object-contain"
                />
              </CardHeader>
              <CardContent className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">{work.company}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};