import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`py-8 border-t ${
        darkMode ? "bg-dark-bg border-dark-border" : "bg-white border-gray-200"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer text-xl font-bold"
          >
            <span className="text-primary">&lt;</span>
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              Arul
            </span>
            <span className="text-primary"> /&gt;</span>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AruldhineshA"
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/arul-dhinesh-669ab0246/"
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:aruldinesh497@gmail.com"
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              <FiMail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p
            className={`text-sm ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            &copy; {year} Arul Dhinesh A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
