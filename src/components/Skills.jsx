import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRemix,
  SiNestjs,
  SiMongodb,
  SiApachekafka,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "Remix", icon: <SiRemix />, color: "#000000" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
    ],
  },
  {
    title: "Database & Messaging",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Kafka", icon: <SiApachekafka />, color: "#231F20" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#181717" },
      { name: "LangGraph", icon: <FaPython />, color: "#10B981" },
    ],
  },
];

export default function Skills() {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={darkMode ? "py-20 px-4 bg-dark-card/30" : "py-20 px-4 bg-gray-50"}
    >
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
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p
            className={`mt-4 text-center max-w-2xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3
                className={`text-lg font-semibold mb-5 flex items-center gap-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className={`group flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-default ${
                      darkMode
                        ? "bg-dark-card border-dark-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                        : "bg-white border-gray-200 hover:border-primary/50 hover:shadow-lg"
                    }`}
                  >
                    <span
                      className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs font-medium text-center leading-tight ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
