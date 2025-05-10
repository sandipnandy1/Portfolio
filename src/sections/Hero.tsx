import { motion } from "framer-motion";
import profilePhoto from "../assets/myphoto.jpg";

interface HeroProps {
  timeDiff: (date: Date) => string;
  scrollToSection: (sectionId: string) => void;
}

function Hero({ timeDiff, scrollToSection }: HeroProps) {
  const initalDate = new Date(2022, 9);

  return (
    <div>
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-24 pb-16 md:pt-32 md:pb-24"
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700">
                Frontend React Developer
              </h2>
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
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  scale: {
                    type: "spring",
                    visualDuration: 0.8,
                    bounce: 0.4,
                  },
                }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={profilePhoto}
                    alt="Developer profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
                  <span className="font-medium">
                    {timeDiff(initalDate)} Years Exp.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Hero;
