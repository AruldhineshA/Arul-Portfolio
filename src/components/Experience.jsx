import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const experiences = [
  {
    company: "Skillmine Technology Consulting Pvt Ltd",
    role: "Junior Software Developer",
    duration: "Feb 2025 - Present",
    location: "Sivakasi",
    type: "Full-time",
    responsibilities: [
      "Developed scalable frontend and backend features using React.js, NestJS, and MongoDB",
      "Optimized APIs and improved performance using Kafka and efficient query handling",
      "Implemented reliable data flow and integrated advanced tools like LangGraph",
      "Built responsive and high-performance UI components using React.js and Remix",
      "Resolved complex frontend bugs and improved application performance",
      "Collaborated with backend and client teams to implement new features efficiently",
    ],
    projects: ["SkillZen Platform", "First Credit Service (FCS)"],
  },
];

export default function Experience() {
  const { darkMode } = useTheme();

  return (
    <section
      id="experience"
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
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        {/* Experience Card - Full Width */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                darkMode
                  ? "bg-dark-card border-dark-border hover:border-primary/30 hover:shadow-primary/5"
                  : "bg-white border-gray-200 hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                {exp.type}
              </span>

              <h3
                className={`text-xl sm:text-2xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {exp.role}
              </h3>

              <p className="text-primary font-semibold text-lg mb-3">
                {exp.company}
              </p>

              <div
                className={`flex flex-wrap gap-4 text-sm mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={14} />
                  {exp.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={14} />
                  {exp.location}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-sm sm:text-base ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>

              {/* Projects worked on */}
              <div>
                <p
                  className={`text-sm font-medium mb-3 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Projects:
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.projects.map((proj, k) => (
                    <span
                      key={k}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium ${
                        darkMode
                          ? "bg-dark-border text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <FiBriefcase size={12} />
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mt-20 mb-10"
        >
          <h3
            className={`text-2xl sm:text-3xl font-bold mb-4 text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border ${
            darkMode
              ? "bg-dark-card border-dark-border"
              : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h4
                className={`text-lg sm:text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Bachelor of Information Technology
              </h4>
              <p className="text-primary font-medium mt-1">
                Francis Xavier Engineering College
              </p>
              <p
                className={`text-sm mt-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                2020 - 2024
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-primary">8.0</span>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                CGPA / 10
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
