import { easeInOut, motion } from 'framer-motion';

export default function Skill() {

    const Icons = {
        Code: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        ),
        Monitor: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        ),
        Database: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        ),
        Globe: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
          </svg>
        ),
        Paintbrush: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 3v18h-6V3z"></path>
            <path d="M12 14.5a3 3 0 01-3 3H3v-6h6a3 3 0 013 3z"></path>
          </svg>
        )
      };

    const getIconByClass = (iconClass: unknown) => {
        switch(iconClass) {
          case 'code': return <Icons.Code />;
          case 'monitor': return <Icons.Monitor />;
          case 'database': return <Icons.Database />;
          case 'globe': return <Icons.Globe />;
          case 'paintbrush': return <Icons.Paintbrush />;
          default: return <Icons.Code />;
        }
      };

    const skills = [
        { name: "React", level: 90, iconClass: "code" },
        { name: "JavaScript", level: 90, iconClass: "code" },
        { name: "TypeScript", level: 70, iconClass: "code" },
        { name: "HTML/CSS", level: 90, iconClass: "monitor" },
        { name: "Redux", level: 80, iconClass: "database" },
        { name: "Node.js", level: 70, iconClass: "code" },
        { name: "MSSQL && MongoDB", level: 70, iconClass: "database" },
        { name: "Tailwind CSS", level: 80, iconClass: "paintbrush" }
      ];

  return (
    <motion.div
      id="skills"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: -20 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <section
        id="skills"
        className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, ease: easeInOut },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white mr-4">
                      {getIconByClass(skill.iconClass)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <span className="text-sm text-gray-600 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

