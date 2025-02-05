import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const PreviousWorks = () => {
  const works = [
    {
      id: 1,
      logo: "/placeholder.svg",
      description: "Add your description here (3-4 lines)",
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
                  alt="Company Logo"
                  className="h-24 w-auto object-contain"
                />
              </CardHeader>
              <CardContent className="text-center p-6">
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