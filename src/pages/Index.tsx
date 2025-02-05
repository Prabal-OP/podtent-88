import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Story } from "@/components/Story";
import { Process } from "@/components/Process";
import { PreviousWorks } from "@/components/PreviousWorks";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Partners />
      <PreviousWorks />
      <Story />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;