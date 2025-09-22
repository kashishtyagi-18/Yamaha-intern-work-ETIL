import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-block mb-4">
            <Button variant="outline">← Back to Home</Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Get in touch with our research team
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      ymsli@yamaha-motor-india.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">PH NO</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/fifth+%26+sixth+floor,+l%26t,+12%2F4,+mathura+road,+near+sarai+khawaja+road,+sector+27d,+faridabad,+haryana+121003/@28.4762,77.301584,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition"
                >
                  <div className="flex items-start gap-4 cursor-pointer">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">
                        ETIL Research Lab
                        <br />
                        Fifth &amp; Sixth Floor, L&amp;T,
                        <br />
                        12/4, Mathura Rd, near Sarai Khawaja Road,
                        <br />
                        Sector 27D, Faridabad, Haryana 121003
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Research Areas */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Research Areas
              </h2>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900">Medical Imaging</h3>
                  <p className="text-sm text-gray-600">
                    Advanced image analysis for healthcare applications
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900">
                    Precision Agriculture
                  </h3>
                  <p className="text-sm text-gray-600">
                    AI-driven solutions for modern farming
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900">
                    Autonomous Driving
                  </h3>
                  <p className="text-sm text-gray-600">
                    Computer vision for autonomous vehicles
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900">3D Point Cloud</h3>
                  <p className="text-sm text-gray-600">
                    3D data processing and analysis
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900">Language Models</h3>
                  <p className="text-sm text-gray-600">
                    Natural language processing research
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900">EEG Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Brain signal processing and interpretation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Section */}
          <div className="mt-16 bg-blue-50 p-8 rounded-xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Interested in Collaboration?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We welcome collaborations with academic institutions, industry
                partners, and fellow researchers. Reach out to discuss potential
                partnerships and research opportunities.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start a Conversation
              </Button>
            </div>
          </div>
          {/* Contact Form Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
