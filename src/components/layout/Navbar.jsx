import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/CuraAi Logo 2 white (1).png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Pricing", to: "/pricing" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-[1b1b1b]/70 backdrop-blur shadow-lg rounded-2xl border border-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="shrink-0">
            <img
              src={logo}
              alt="CuraAI Logo"
              className="h-12 w-auto object-contain transition-transform hover:scale-105 duration-200 backdrop-blur"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map(({ name, to }) => (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `group relative inline-flex flex-col text-base font-medium transition-colors duration-200 ${
                        isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
                      }`
                    }
                    end={to === "/"}
                  >
                    {({ isActive }) => (
                      <>
                        {name}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 py-4 animate-fadeIn">
            <ul className="space-y-2">
              {navItems.map(({ name, to }) => (
                <li key={name}>
                  <NavLink
                    to={to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-600/80 text-white"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    end={to === "/"}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
