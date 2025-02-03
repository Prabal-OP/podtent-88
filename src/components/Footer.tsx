export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Podcast Production</h3>
            <p className="text-gray-400">
              Professional podcast production services for brands and individuals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: hello@podcastpro.com</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Podcast Production</li>
              <li>Content Repurposing</li>
              <li>Guest Booking</li>
              <li>Strategy Consulting</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Podcast Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};