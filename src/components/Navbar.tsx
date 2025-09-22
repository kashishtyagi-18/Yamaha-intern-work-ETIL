import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

import yamahaLogo from "@/assets/image__yamaha.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md" ref={navRef}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={yamahaLogo}
            alt="Yamaha Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 text-lg font-medium text-gray-800">
          {/* Research Areas */}
          <li className="relative">
            <button
              className="relative flex items-center gap-1 group"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "research" ? null : "research"
                )
              }
            >
              Research Areas
              {activeDropdown === "research" ? (
                <ChevronUp size={16} className="text-black" />
              ) : (
                <ChevronDown size={16} className="text-black" />
              )}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {activeDropdown === "research" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                <h3 className="font-semibold text-gray-900 mb-2 text-[1.1rem] leading-[3.5rem]">
                  Area of research:
                </h3>
                <ul className="space-y-6 text-gray-700 text-sm font-normal">
                  <li>
                    <Link to="/publications/Medical%20Imaging">
                      Medical Imaging
                    </Link>
                  </li>
                  <li>
                    <Link to="/publications/Precision%20Agriculture">
                      Precision Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link to="/publications/Autonomous%20Driving">
                      Techniques of Autonomous Driving
                    </Link>
                  </li>
                  <li>
                    <Link to="/publications/3D%20Point%20Cloud">
                      3D Point Cloud
                    </Link>
                  </li>
                  <li>
                    <Link to="/publications/Language%20Model">
                      Language Model
                    </Link>
                  </li>
                  <li>
                    <Link to="/publications/EEG">EEG</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="relative group">
            <Link to="/team" className="relative">
              Our Team
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Other links */}
          <li className="relative">
            <button
              className="relative flex items-center gap-1 group"
              onClick={() =>
                setActiveDropdown(activeDropdown === "news" ? null : "news")
              }
            >
              News & Blog
              {activeDropdown === "news" ? (
                <ChevronUp size={16} className="text-black" />
              ) : (
                <ChevronDown size={16} className="text-black" />
              )}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {activeDropdown === "news" && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50">
                <h3 className="font-semibold text-gray-900 mb-2 text-[1.1rem] leading-[2rem]">
                  News & Blog:
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm font-normal">
                  <li>
                    <Link to="/news">News</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/sr-talk">SR Talk</Link>
                  </li>
                  <li>
                    <Link to="/newsletter">Newsletter</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="relative group">
            <Link to="/careers" className="relative">
              Careers
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/about" className="relative">
              About
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/team" className="block">
            Our Team
          </Link>
          <Link to="/careers" className="block">
            Careers
          </Link>
          <Link to="/about" className="block">
            About
          </Link>
          {/* Research Areas mobile */}
          <div>
            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "research" ? null : "research"
                )
              }
              className="flex items-center gap-2"
            >
              Research Areas{" "}
              {activeDropdown === "research" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeDropdown === "research" && (
              <ul className="pl-4 mt-2 space-y-2 text-gray-700">
                <li>
                  <Link to="/publications/Medical%20Imaging">
                    Medical Imaging
                  </Link>
                </li>
                <li>
                  <Link to="/publications/Precision%20Agriculture">
                    Precision Agriculture
                  </Link>
                </li>
                <li>
                  <Link to="/publications/Autonomous%20Driving">
                    Techniques of Autonomous Driving
                  </Link>
                </li>
                <li>
                  <Link to="/publications/3D%20Point%20Cloud">
                    3D Point Cloud
                  </Link>
                </li>
                <li>
                  <Link to="/publications/Language%20Model">
                    Language Model
                  </Link>
                </li>
                <li>
                  <Link to="/publications/EEG">EEG</Link>
                </li>
              </ul>
            )}
          </div>

          {/* News & Blog mobile */}
          <div>
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "news" ? null : "news")
              }
              className="flex items-center gap-2"
            >
              News & Blog{" "}
              {activeDropdown === "news" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeDropdown === "news" && (
              <ul className="pl-4 mt-2 space-y-2 text-gray-700">
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/sr-talk">SR Talk</Link>
                </li>
                <li>
                  <Link to="/newsletter">Newsletter</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
