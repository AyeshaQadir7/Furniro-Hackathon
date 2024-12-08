import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center my-16">
        <h1 className="text-4xl font-semibold">Get In Touch With Us</h1>
        <p className="text-gray-600 mt-4">
          We&apos;d love to hear from you! Whether you have a question,
          <br />
          feedback, or just want to say hello, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-8 ml-16">
          <div className="flex items-center gap-4">
            <MapPin size={24} className="text-gray-700" />
            <div>
              <h3 className="font-bold text-lg">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone size={24} className="text-gray-700" />
            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-gray-600">
                +1 Mobile: +(84) 546-6789
                <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock size={24} className="text-gray-700" />
            <div>
              <h3 className="font-bold text-lg">Working Hours</h3>
              <p className="text-gray-600">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div>
          <form className="space-y-6 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-8 py-3 text-white bg-Gold rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
