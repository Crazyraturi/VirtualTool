import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3  backdrop-blur-lg border-b border-neutral-700/80 " >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 m-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tighter " >VirtualTool</span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-orange-500 transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex space-x-4 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:text-orange-500 transition duration-300"
            >
              Sign in
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800  py-2 px-4 rounded-md hover:opacity-90"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavBar} className="focus:outline-none">
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full shadow-lg rounded-md py-4 bg-neutral-800">
            <ul className="space-y-4 px-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-lg hover:text-orange-500 transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col items-center space-y-4 px-4">
              <a
                href="#"
                className="py-2 px-3 border w-full text-center rounded-md hover:text-orange-500 transition duration-300"
              >
                Sign in
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 w-full text-center text-white py-2 px-4 rounded-md hover:opacity-90"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
