import Thumbnail_TodoApp from "../assets/Thumbnail_TodoApp.png";
import Thumbnail_SocialMediaApp from "../assets/Thumbnail_SocialMedia.png";
import Thumbnail_Test from "../assets/Thumbnail_Test.png";
export default function Project() {

    const Icons = {
        ExternalLink: () => (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        )
      };

    const projects = [
        {
          id: 1,
          title: "Todo Application",
          description: "A responsive admin dashboard for managing Todos.",
          tech: ["React", "ContextAPI", "Tailwind CSS"],
          image: Thumbnail_TodoApp,
          link: "https://sandipnandy1.github.io/TodoApp/"
        },
        {
          id: 2,
          title: "Social Media App",
          description: "A full-featured social platform with user authentication, post creation, comments, and real-time notifications.",
          tech: ["React", "Firebase", "Material UI", "Context API"],
          image: Thumbnail_SocialMediaApp,
          link: "https://www.facebook.com/"
        },
        {
          id: 3,
          title: "Weather Application",
          description: "A weather forecast application with location detection, interactive maps, and detailed weather insights.",
          tech: ["React", "Weather API", "React Query", "Styled Components"],
          image: Thumbnail_Test,
          link: "https://sandipnandy1.github.io/Test1/"
        }
      ];

  return (
    <div>
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/70 to-pink-600/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link} // Use the link property
                      target="_blank" // Open in a new tab
                      rel="noopener noreferrer" // Security best practice
                      className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium flex items-center"
                    >
                      View Details <Icons.ExternalLink />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

