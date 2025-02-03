import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-white to-orange-50">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Turn Your Expertise Into A
          <span className="text-primary block mt-2">Professional Podcast</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn">
          Professional podcast production service delivering 4 high-quality episodes monthly, with content repurposing for maximum impact.
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg animate-fadeIn"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Podcast Journey
        </Button>
      </div>
    </section>
  );
};