import React from 'react';
import Navbar from '../Components/Navbar/Navbar'; // Assuming you have a Navbar component
import Footer from '../Components/Footer/Footer'; // Assuming you have a Footer component
import { ToastContainer, toast } from 'react-toastify';

const Help = () => {
  // Handle the form submission (for "Contact Us")
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Here you could send the message via an API or email service
    console.log('Message from:', email, 'Message:', message);
    toast.success('Your message has been sent! ✅');
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 px-4 py-10">
        <ToastContainer />
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {/* FAQ Section */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-gray-700">How do I make a purchase?</h3>
              <p className="text-gray-600">To make a purchase, browse the items on our store, add them to the cart, and proceed to checkout.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-700">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept credit cards, debit cards, and PayPal.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-700">Can I return an item?</h3>
              <p className="text-gray-600">Yes, we offer a 30-day return policy for most products. Please visit our Returns page for more details.</p>
            </div>
            {/* Add more FAQs here */}
          </div>

          {/* Contact Us Section */}
          <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-4">If you need further assistance, feel free to contact us. We are happy to help!</p>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Your Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Type your message here..."
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
