import { motion } from "framer-motion";

export const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted By Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="text-center">
            <img 
              src="/placeholder.svg" 
              alt="EdisonOS Logo" 
              className="h-16 mx-auto mb-4 opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="w-full mt-12 text-center">
            <p className="text-2xl font-semibold text-gray-700">
              200+ Episodes Produced
            </p>
            <p className="text-gray-500 mt-2">
              Interviews with leaders from across the globe as they share their journeys, challenges, and strategies for success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};