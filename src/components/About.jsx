import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const highlights = [
  {
    icon: <FiCode size={24} />,
    title: "Frontend Development",
    desc: "Building responsive, performant UIs with React.js and Remix",
  },
  {
    icon: <FiLayers size={24} />,
    title: "Backend Development",
    desc: "Creating robust APIs with NestJS, Node.js, and Python",
  },
  {
    icon: <FiDatabase size={24} />,
    title: "Database & Tools",
    desc: "Working with MongoDB, Kafka, and LangGraph integrations",
  },
];

export default function About() {
  const { darkMode } = useTheme();

  return (
    <section id="about" className="py-20 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Title */}
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
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className={`text-base sm:text-lg leading-relaxed mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I am a passionate{" "}
              <span className="text-primary font-semibold">
                Junior Software Developer
              </span>{" "}
              with 1 year of hands-on experience building scalable and
              user-focused web applications. I specialize in frontend
              development using{" "}
              <span className="text-primary font-semibold">
                React.js and Remix
              </span>
              , and backend development with{" "}
              <span className="text-primary font-semibold">
                NestJS, MongoDB, Kafka, and LangGraph
              </span>
              .
            </p>
            <p
              className={`text-base sm:text-lg leading-relaxed mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I have successfully delivered and efficiently managed{" "}
              <span className="text-primary font-semibold">
                two client projects
              </span>
              , ensuring clean architecture, performance optimization, and
              reliable backend integrations. I enjoy solving real-world problems,
              writing maintainable code, and continuously improving my technical
              skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { num: "1+", label: "Year Experience" },
                { num: "2+", label: "Client Projects" },
                { num: "10+", label: "Technologies" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-center p-4 rounded-xl border ${
                    darkMode
                      ? "bg-dark-card/50 border-dark-border"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <p className="text-3xl font-bold text-primary">{stat.num}</p>
                  <p
                    className={`text-sm mt-1 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 8 }}
                className={`flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 ${
                  darkMode
                    ? "bg-dark-card/50 border-dark-border hover:border-primary/50"
                    : "bg-white border-gray-200 hover:border-primary/50 shadow-sm"
                }`}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
