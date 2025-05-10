import { motion } from "framer-motion";

interface AboutMeProps {
  timeDiff: (date: Date) => string;
}

export default function AboutMe({ timeDiff }: AboutMeProps) {
  const initalDate = new Date(2022, 9);
  return (
    <motion.div
      id="projects"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: -20 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-10">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl shadow-xl">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Professional Summary
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Frontend Developer with {timeDiff(initalDate)} years of
                    experience in the React ecosystem, skilled in React.js and
                    Redux. Backed by an M.Tech and B.Sc. in Mathematics, I
                    combine strong analytical skills with technical expertise to
                    build scalable, user-focused web applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                      CSS
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Responsive
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-500 to-orange-500 p-1 rounded-xl shadow-lg">
                  <div className="bg-white p-6 rounded-lg h-full">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Education
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">
                        MTech in Software Engineering
                      </span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      BITS Pilani, 2022 - present
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">BSc in Mathematics</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      University of Calcutta, 2017 - 2020
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-1 rounded-xl shadow-lg">
                  <div className="bg-white p-6 rounded-lg h-full">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Work Experience
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Frontend Developer</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      Wipro Limited., 2022 - Present
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Tutor of Mathematics</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      Wipro Limited., 2017 - 2022
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-1 rounded-xl shadow-lg md:col-span-2">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      My Approach
                    </h3>
                    <p className="text-gray-600">
                      I focus on creating clean, efficient, and maintainable
                      code while keeping user experience at the forefront. My
                      development philosophy centers around responsive design
                      principles, component reusability, and performance
                      optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
