export const Story = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/efd91d95-d1a6-47e6-b841-0b9fa7e7369f.png" 
              alt="Jagmohan" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Story</h2>
            <p className="text-gray-600 mb-6 text-lg">
              With years of experience in podcast and content production, I have helped countless brands and individuals share their stories with the world. My passion lies in creating professional, engaging content that resonates with the brand's target audience.
            </p>
            <p className="text-gray-600 text-lg">
              I don't just produce podcasts, I create a complete content ecosystem around each episode, ensuring maximum reach and business goals are aligned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};