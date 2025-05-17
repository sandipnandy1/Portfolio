import {  motion } from "framer-motion";
import profilePhoto from "../assets/myphoto.jpg";
import { TypeAnimation } from "react-type-animation";

interface HeroProps {
  timeDiff: (date: Date) => string;
  scrollToSection: (sectionId: string) => void;
}

function Hero({ timeDiff, scrollToSection }: HeroProps) {
  const initalDate = new Date(2022, 9);

  return (
  <div className="rounded-xl  backdrop-blur-md bg-gradient-to-br from-pink-100 to-teal-100 p-6 shadow-lg">
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Sandip Nandy
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-bold mb-6 text-gray-700 h-12">
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1000,
                'UI/UX Designer',
                1000,
                'React Specialist',
                1000,
                'Full Stack Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
              <p className="text-lg mb-8 text-gray-600 max-w-lg">
                With {timeDiff(initalDate)} YOE crafting responsive,
                user-friendly web applications that combine functionality with
                modern design.
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
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  scale: {
                    type: "spring",
                    visualDuration: 0.6,
                    bounce: 0.4,
                  },
                }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={profilePhoto}
                    alt="Developer profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  scale: {
                    delay: 0.5,
                    type: "spring",
                    visualDuration: 0.6,
                    bounce: 0.4,
                  },
                }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
                  <span className="font-medium">
                    {timeDiff(initalDate)} Years Exp.
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Hero;
