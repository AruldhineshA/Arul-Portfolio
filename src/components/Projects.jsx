import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "SkillZen",
    description:
      "Full Stack Developer on the SkillZen learning platform, building scalable frontend and backend features. Implemented API optimizations and integrated Kafka and LangGraph to improve system performance and reliability.",
    tech: [
      "React.js",
      "TanStack",
      "NestJS",
      "MongoDB",
      "Kafka",
      "LangGraph",
    ],
    liveUrl: "https://nightly.skillzen.ai/",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "First Credit Service (FCS)",
    description:
      "Frontend Developer on the FCS US client project, building responsive and scalable user interfaces using React.js and Remix while efficiently solving complex UI and performance issues.",
    tech: ["React.js", "Remix", "JavaScript", "CSS"],
    liveUrl: "https://fcs-admin-dev.skill-mine.com/",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p
            className={`mt-4 text-center max-w-2xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Real-world client projects I've worked on professionally
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className={`group rounded-2xl overflow-hidden border transition-all duration-500 ${
                darkMode
                  ? "bg-dark-card border-dark-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                  : "bg-white border-gray-200 hover:border-primary/50 hover:shadow-2xl"
              }`}
            >
              {/* Gradient top bar */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-5 sm:p-6 md:p-8">
                {/* Title */}
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode
                            ? "text-gray-400 hover:text-primary hover:bg-dark-border"
                            : "text-gray-500 hover:text-primary hover:bg-gray-100"
                        }`}
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode
                            ? "text-gray-400 hover:text-primary hover:bg-dark-border"
                            : "text-gray-500 hover:text-primary hover:bg-gray-100"
                        }`}
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-primary/10 text-primary-dark border border-primary/20"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
