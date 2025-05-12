import { motion } from "framer-motion";
import sato from "../assets/sato.png";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

function Navbar({
  activeSection,
  scrollToSection,
  toggleMenu,
  isMenuOpen,
}: NavbarProps) {
  // Icon components using SVG and JSX
  const Icons = {
    Menu: () => (
      <div className="w-6 h-6 flex flex-col justify-around">
        <div className="w-full h-0.5 bg-current"></div>
        <div className="w-full h-0.5 bg-current"></div>
        <div className="w-full h-0.5 bg-current"></div>
      </div>
    ),
    Close: () => (
      <div className="w-6 h-6 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform rotate-45"></div>
      </div>
    ),
  };
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full backdrop-blur-md bg-white/80 shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img
                src={sato}
                alt="Icon"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors duration-300 hover:text-purple-600 ${
                    activeSection === section
                      ? "text-purple-600"
                      : "text-gray-700"
                  }`}
                >
                  {section}
                </button>
              )
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white py-2 px-4 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col space-y-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium py-2 transition-colors duration-300 hover:text-purple-600 ${
                    activeSection === section
                      ? "text-purple-600"
                      : "text-gray-700"
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {section}
                </motion.button>
              )
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
