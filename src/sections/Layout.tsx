import { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import Contacts from "./Contacts";
import Project from "./Project";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import ParticleBackground from "../components/ParticleBackground";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Function to calculate the time difference in years and months
  const timeDifference = (startDate: Date) => {
    const start = new Date(startDate);
    const now = new Date();
    let yearDiff = now.getFullYear() - start.getFullYear();
    let monthDiff = now.getMonth() - start.getMonth();

    if (monthDiff < 0) {
      yearDiff -= 1;
      monthDiff += 12;
    }
    if (monthDiff === 0) {
      return `${yearDiff} Year`;
    }
    return `${yearDiff}.${monthDiff}`;
  };

  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <motion.div
            animate="pulse"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="container flex items-center justify-center space-x-4"
          >
            <motion.div
              className="w-4 h-4 bg-purple-700 transparent rounded-full"
              variants={dotVariants}
            />
            <motion.div
              className="w-4 h-4 bg-purple-700 transparent rounded-full"
              variants={dotVariants}
            />
            <motion.div
              className="w-4 h-4 bg-purple-700 transparent rounded-full"
              variants={dotVariants}
            />
          </motion.div>
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full"
          ></motion.div> */}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-sans antialiased text-gray-900 bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <ParticleBackground />
          <div className="relative z-10">
          <Navbar
            scrollToSection={scrollToSection}
            activeSection={activeSection}
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
          />
          <div className="relative z-10 flex flex-col min-h-screen">
          <Hero timeDiff={timeDifference} scrollToSection={scrollToSection} />
          {/* About Me, Skills, Projects, and Contacts */}
          <div>
            <AboutMe timeDiff={timeDifference} />
            <Skill />
            <Project />
            <Contacts />
          </div>
          </div>
          <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}
