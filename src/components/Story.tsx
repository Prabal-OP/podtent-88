export const Story = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Studio Setup" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 text-lg">
              With years of experience in podcast production, we've helped countless brands and individuals share their stories with the world. Our passion lies in creating professional, engaging content that resonates with your target audience.
            </p>
            <p className="text-gray-600 text-lg">
              We don't just produce podcasts; we create a complete content ecosystem around each episode, ensuring maximum reach and impact for your message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};