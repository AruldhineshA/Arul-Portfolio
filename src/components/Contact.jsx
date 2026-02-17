import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "aruldinesh497@gmail.com",
    href: "mailto:aruldinesh497@gmail.com",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+91 9944301648",
    href: "tel:+919944301648",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Tirunelveli, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <FaGithub size={22} />,
    label: "GitHub",
    href: "https://github.com/AruldhineshA",
  },
  {
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arul-dhinesh-669ab0246/",
  },
];

export default function Contact() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:aruldinesh497@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      formData.message + "\n\nFrom: " + formData.name + "\nEmail: " + formData.email
    )}`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
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
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p
            className={`mt-4 text-center max-w-2xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className={`text-xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Information
            </h3>

            <div className="space-y-5 mb-8">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${
                    darkMode
                      ? "bg-dark-card/50 border-dark-border"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className={`text-xs sm:text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-sm sm:text-base font-medium hover:text-primary transition-colors ${
                          darkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className={`text-sm sm:text-base font-medium ${
                          darkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <h3
              className={`text-lg font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Follow Me
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "bg-dark-card text-gray-400 hover:text-primary hover:bg-dark-border"
                      : "bg-gray-100 text-gray-600 hover:text-primary hover:bg-gray-200"
                  }`}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`space-y-5 p-6 sm:p-8 rounded-2xl border ${
                darkMode
                  ? "bg-dark-card/50 border-dark-border"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    darkMode
                      ? "bg-dark-bg border-dark-border text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    darkMode
                      ? "bg-dark-bg border-dark-border text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-300 resize-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    darkMode
                      ? "bg-dark-bg border-dark-border text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
              >
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
