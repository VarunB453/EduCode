import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'py-4'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-educode-accent">
            EduCode
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-educode-accent' : ''}`}>
              Home
            </Link>
            <Link to="/documentation" className={`nav-link ${location.pathname === '/documentation' ? 'text-educode-accent' : ''}`}>
              Documentation
            </Link>
            <Link to="/features" className={`nav-link ${location.pathname === '/features' ? 'text-educode-accent' : ''}`}>
              Features
            </Link>
            <Link to="/workflow" className={`nav-link ${location.pathname === '/workflow' ? 'text-educode-accent' : ''}`}>
              Workflow
            </Link>
            <Link to="/code-editor" className={`nav-link ${location.pathname === '/code-editor' ? 'text-educode-accent' : ''}`}>
              CodeEditor
            </Link>
            <Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'text-educode-accent' : ''}`}>
              Pricing
            </Link>
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
          </div>

          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <Link
                  to="/"
                  className={`block nav-link ${location.pathname === '/' ? 'text-educode-accent' : ''}`}
                >
                  Home
                </Link>
                <Link
                  to="/documentation"
                  className={`block nav-link ${location.pathname === '/documentation' ? 'text-educode-accent' : ''}`}
                >
                  Documentation
                </Link>
                <Link
                  to="/features"
                  className={`block nav-link ${location.pathname === '/features' ? 'text-educode-accent' : ''}`}
                >
                  Features
                </Link>
                <Link
                  to="/workflow"
                  className={`block nav-link ${location.pathname === '/workflow' ? 'text-educode-accent' : ''}`}
                >
                  Workflow
                </Link>
                <Link
                  to="/code-editor"
                  className={`block nav-link ${location.pathname === '/code-editor' ? 'text-educode-accent' : ''}`}
                >
                  CodeEditor
                </Link>
                <Link
                  to="/pricing"
                  className={`block nav-link ${location.pathname === '/pricing' ? 'text-educode-accent' : ''}`}
                >
                  Pricing
                </Link>
                <Link to="/register" className="block w-full btn-primary">
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;
