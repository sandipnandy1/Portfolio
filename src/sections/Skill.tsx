import { easeInOut, motion } from "framer-motion";

export default function Skill() {
  const Icons = {
    Code: () => (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    AWS: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        id="Amazon-Web-Service-Logo--Streamline-Logos"
        height="24"
        width="24"
      >
        <desc>
          Amazon Web Service Logo Streamline Icon: https://streamlinehq.com
        </desc>
        <path
          stroke="#ffffff"
          stroke-linejoin="round"
          d="m8.5 6 1.5 5.5h0.5l1.5 -5h0.5l1.5 5h0.5L16 6"
          stroke-width="1"
        ></path>
        <path
          stroke="#ffffff"
          stroke-linejoin="round"
          d="M21.5 6.5c-0.333 -0.167 -0.894 -0.5 -2 -0.5 -1.106 0 -1.5 0.623 -1.5 1.5 0 1.32 3.5 1.3 3.5 2.5 0 1.027 -0.625 1.532 -2 1.5 -1.375 -0.032 -2 -0.5 -2 -0.5"
          stroke-width="1"
        ></path>
        <path
          stroke="#ffffff"
          stroke-linejoin="round"
          d="M2.5 6.5c0.167 -0.167 0.8 -0.5 2 -0.5s2 0.5 2 1l0 3.5c0 0.4 0.415 0.961 0.582 1.128"
          stroke-width="1"
        ></path>
        <path
          stroke="#ffffff"
          stroke-linejoin="round"
          d="M6.5 9s-1.2 -0.5 -2 -0.5c-1.343 0 -2 0.877 -2 2 0 1 1 1 1.5 1 1.12 0 2.5 -1 2.5 -1"
          stroke-width="1"
        ></path>
        <path
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M1.5 14.5C3 15.667 7.2 18 12 18c4 0 7.667 -1.333 8.5 -2"
          stroke-width="1"
        ></path>
        <path
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 14.5h3l-1 3"
          stroke-width="1"
        ></path>
      </svg>
    ),
    Database: () => (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    Globe: () => (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
      </svg>
    ),
    Paintbrush: () => (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 3v18h-6V3z"></path>
        <path d="M12 14.5a3 3 0 01-3 3H3v-6h6a3 3 0 013 3z"></path>
      </svg>
    ),
  };

  const getIconByClass = (iconClass: unknown) => {
    switch (iconClass) {
      case "code":
        return <Icons.Code />;
      case "aws":
        return <Icons.AWS />;
      case "database":
        return <Icons.Database />;
      case "globe":
        return <Icons.Globe />;
      case "paintbrush":
        return <Icons.Paintbrush />;
      default:
        return <Icons.Code />;
    }
  };

  const skills = [
    { name: "React", level: 90, iconClass: "code" },
    { name: "JavaScript", level: 90, iconClass: "code" },
    { name: "TypeScript", level: 70, iconClass: "code" },
    { name: "AWS", level: 70, iconClass: "aws" },
    { name: "Redux", level: 80, iconClass: "database" },
    { name: "Node.js", level: 70, iconClass: "code" },
    { name: "MSSQL && MongoDB", level: 70, iconClass: "database" },
    { name: "Tailwind CSS", level: 80, iconClass: "paintbrush" },
  ];

  return (
    <div>
      <section
        id="skills"
        className="py-16 bg-gradient-to-br from-pink-100 to-teal-100"
      >
        <motion.div
          id="skills"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: -20 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
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
                className="bg-white sm:rounded-xl rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="sm:p-4 p-2">
                  <div className="flex items-center mb-4">
                    <div className="sm:p-1 p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white mr-4">
                      {getIconByClass(skill.iconClass)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="justify-end w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
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
        </motion.div>
      </section>
    </div>
  );
}
