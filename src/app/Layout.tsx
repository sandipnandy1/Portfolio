import { useState, useEffect } from 'react';
import profilePhoto from '../assets/myphoto.jpg'; // Ensure this file exists in the assets folder
import sato from '../assets/sato.png'; // Ensure this file exists in the assets folder
import AboutMe from './AboutMe';
import Skill from './Skill';
import Contacts from './Contacts';
import Project from './Project';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  // Function to calculate the time difference in years and months
  const initalDate = new Date(2022, 9);
  const timeDifference = (startDate: Date) => {
    const start = new Date(startDate);
    const now = new Date();
    let yearDiff = now.getFullYear() - start.getFullYear();
    let monthDiff = now.getMonth() - start.getMonth();

    if(monthDiff < 0) {
      yearDiff -= 1;
      monthDiff += 12;
    }
    if(monthDiff === 0) {
      return `${yearDiff} Year`;
    }
    return `${yearDiff}.${monthDiff}`;
  }

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
    )
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-md bg-white/80 shadow-md z-50">
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
          <div className="md:hidden bg-white py-2 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-sm font-medium py-2 transition-colors duration-300 hover:text-purple-600 ${
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
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Sandip Nandy
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700">
                Frontend React Developer
              </h2>
              <p className="text-lg mb-8 text-gray-600 max-w-lg">
                With {timeDifference(initalDate)} YOE crafting responsive, user-friendly web applications
                that combine functionality with modern design.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Work
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={profilePhoto}
                    alt="Developer profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
                  <span className="font-medium">{timeDifference(initalDate)} Years Exp.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Me, Skills, Projects, and Contacts */}
      <AboutMe timeDiff ={timeDifference}/>
      <Skill />
      <Project />
      <Contacts />

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
            <p>
              © {new Date().getFullYear()} React Developer Portfolio of Sandip. All rights
              reserved.
            </p>
              </div>
            </div>
            <div className="flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize text-sm text-gray-200 hover:text-pink-200 transition-colors duration-300"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}