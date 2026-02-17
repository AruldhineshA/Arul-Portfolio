import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-6xl mx-auto py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4"
          >
            &lt;Hello World /&gt;
          </motion.p>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Arul Dhinesh A
            </span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 h-8 sm:h-10">
            <TypeAnimation
              sequence={[
                "Junior Software Developer",
                2000,
                "Frontend Developer",
                2000,
                "React.js Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary-light"
            />
          </div>

          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Building scalable web applications with modern technologies.
            Passionate about clean code, performance, and great user
            experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-8">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="group cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="/Arul_Dhinesh_Resume.pdf"
              download
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium border transition-all duration-300 hover:-translate-y-0.5 ${
                darkMode
                  ? "border-dark-border text-gray-300 hover:border-primary hover:text-primary"
                  : "border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              <FiDownload />
              Resume
            </a>

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className={`cursor-pointer inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium border transition-all duration-300 hover:-translate-y-0.5 ${
                darkMode
                  ? "border-dark-border text-gray-300 hover:border-primary hover:text-primary"
                  : "border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/AruldhineshA"
              target="_blank"
              rel="noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-dark-card text-gray-400 hover:text-primary hover:bg-dark-border"
                  : "bg-gray-100 text-gray-600 hover:text-primary hover:bg-gray-200"
              }`}
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/arul-dhinesh-669ab0246/"
              target="_blank"
              rel="noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-dark-card text-gray-400 hover:text-primary hover:bg-dark-border"
                  : "bg-gray-100 text-gray-600 hover:text-primary hover:bg-gray-200"
              }`}
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image / Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center order-first md:order-last"
        >
          <div className="relative">
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-spin-slow">
              <div
                className={`w-full h-full rounded-full ${
                  darkMode ? "bg-dark-bg" : "bg-light-bg"
                }`}
              />
            </div>

            {/* Avatar placeholder */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                AD
              </span>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute -top-2 -right-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold shadow-lg ${
                darkMode
                  ? "bg-dark-card text-primary border border-dark-border"
                  : "bg-white text-primary border border-gray-200"
              }`}
            >
              React.js
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className={`absolute -bottom-2 -left-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold shadow-lg ${
                darkMode
                  ? "bg-dark-card text-accent border border-dark-border"
                  : "bg-white text-accent border border-gray-200"
              }`}
            >
              NestJS
            </motion.div>
            <motion.div
              animate={{ y: [-3, 7, -3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className={`absolute top-1/2 -right-6 px-3 py-1.5 rounded-lg text-xs font-mono font-bold shadow-lg ${
                darkMode
                  ? "bg-dark-card text-green-400 border border-dark-border"
                  : "bg-white text-green-600 border border-gray-200"
              }`}
            >
              MongoDB
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
