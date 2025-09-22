import { Linkedin, Youtube, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 border-t-4 border-red-500 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-10">Let's connect</h2>

        {/* Grid Layout for Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg">
          <div className="space-y-4">
            <Link to="/contact" className="hover:text-red-400 block">
              Contact us
            </Link>
            {/* <a href="#" className="hover:text-red-400 block">
              Submit RFP
            </a> */}
            <a href="#" className="hover:text-red-400 block">
              View locations
            </a>
            <a href="#" className="hover:text-red-400 block">
              About us
            </a>
          </div>
          <div className="space-y-4">
            <a href="#" className="hover:text-red-400 block">
              Services
            </a>
            {/* <a href="#" className="hover:text-red-400 block">
              Industries
            </a> */}
            {/* <a href="#" className="hover:text-red-400 block">
              Alliances
            </a> */}
          </div>
          <div className="space-y-4">
            <a href="#" className="hover:text-red-400 block">
              Client stories
            </a>
            <a href="#" className="hover:text-red-400 block">
              briefs
            </a>
            {/* <a href="#" className="hover:text-red-400 block">
              Yamaha Insights
            </a> */}
            {/* <a href="#" className="hover:text-red-400 block">
              Newsroom
            </a> */}
          </div>
          <div className="space-y-4">
            <a href="#" className="hover:text-red-400 block">
              Careers
            </a>
            <a href="#" className="hover:text-red-400 block">
              Job Search
            </a>
            <a href="#" className="hover:text-red-400 block">
              Alumni
            </a>
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="mt-12 flex items-center gap-6">
          <span className="text-lg font-medium">Follow us</span>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-red-400">
              <Twitter size={28} />
            </a>
            <a href="#" className="hover:text-red-400">
              <Linkedin size={28} />
            </a>
            <a href="#" className="hover:text-red-400">
              <Youtube size={28} />
            </a>
            <a href="#" className="hover:text-red-400">
              <Instagram size={28} />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
