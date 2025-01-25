import { useState, useEffect } from "react";
    import { Link, useLocation } from "react-router-dom";
    import { Menu, X } from "lucide-react";
    import { Button } from "./ui/button";
    
    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const location = useLocation();
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
        { name: "Pricing", path: "/pricing" },
      ];
    
      return (
        <nav
          className={`fixed w-full z-50 top-0 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-md shadow-sm"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold">
                  AriciaLabs
                </Link>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-gray-600 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button
                    variant="default"
                    className="ml-4 animate-fadeIn"
                    onClick={() => window.location.href = "/contact"}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
              
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile menu */}
          <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="default"
                className="w-full mt-4"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "/contact";
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      );
    };
    
    export default Navbar;
