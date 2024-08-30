import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  ArrowRight,
  Bookmark,
  Book,
  Code,
  Lightbulb,
  Palette,
} from "@phosphor-icons/react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sections = [
    { title: "Interests", icon: Lightbulb },
    { title: "Publications", icon: Book },
    { title: "Projects", icon: Code },
    { title: "Currently Working On", icon: Bookmark },
    { title: "Hobbies", icon: Palette },
  ];

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: darkMode ? "#ffffff" : "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: darkMode ? "#ffffff" : "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      } py-6 px-4 sm:px-6 lg:px-8 font-serif transition-colors duration-300`}
    >
      {/* Particles only visible on small screens or in dark mode */}
      {(darkMode || window.innerWidth < 768) && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
          className="block absolute inset-0 z-0"
        />
      )}
      <div className="max-w-4xl mx-auto relative z-10">
        <nav className="mb-6 flex justify-between items-center">
          <ol className="flex space-x-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
          </ol>
          <button
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-white text-gray-900"
                : "bg-gray-300 text-gray-700"
            } transition-all duration-300 hover:scale-110`}
            onClick={toggleDarkMode}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>

        <header className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src="paul.jpg"
              className="w-20 h-20 rounded-full group-hover:animate-pulse"
            ></img>
            <h1 className="text-4xl font-thin font-sans transition-colors duration-300">
              Paul Onoja
            </h1>
          </Link>
        </header>

        <section className="mb-16 prose prose-lg dark:prose-invert max-w-none">
          <p className="text-2xl ml-4 mb-4">My name is ^</p>
          <p className="mb-4">
            I love to learn new things, be it computers or culture, math or
            history, physics or philosophy.
          </p>
          <p>
            I'm an avid reader, writer, and programmer. I love reading blogs on
            any topic and my own attempts at writing are{" "}
            <Link to="/writings" className="text-blue-500 hover:underline">
              here
            </Link>
            . As a programmer, I enjoy working on{" "}
            <Link to="/projects" className="text-blue-500 hover:underline">
              various projects
            </Link>
            . Feel free to reach out on{" "}
            <a
              href="https://twitter.com"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            .
          </p>
        </section>

        {sections.map((section, index) => (
          <section
            key={index}
            className={`mb-16 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg p-6 border-l-4 ${
              index % 2 === 0 ? "border-blue-500" : "border-purple-500"
            } transition-colors duration-300`}
          >
            <h2 className="text-2xl font-medium mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
              <section.icon size={24} className="mr-2" />
              {section.title}
            </h2>
            <div className="space-y-6">
              {["Deep Learning in C", "Vector Indexes in Go"].map(
                (item, idx) => (
                  <Link
                    key={idx}
                    to={`/${section.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block group"
                  >
                    <h3 className="text-xl font-medium group-hover:text-blue-500 transition-colors duration-300 flex items-center">
                      {item}
                      <ArrowRight
                        className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                        size={20}
                      />
                    </h3>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      } mt-1`}
                    >
                      Brief description of {item.toLowerCase()} project or
                      interest.
                    </p>
                  </Link>
                )
              )}
            </div>
          </section>
        ))}

        <section
          className={`mb-16 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg p-6 border-l-4 border-green-500 transition-colors duration-300`}
        >
          <h2 className="text-2xl font-medium mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
            <Bookmark size={24} className="mr-2" />
            Notes
          </h2>
          <div className="space-y-4">
            {[
              { title: "LLM Lab", weeks: 483 },
              { title: "Poems", weeks: 481 },
              { title: "Functional Analysis", weeks: 477 },
              { title: "Advice", weeks: 257 },
              { title: "Quotes", weeks: 171 },
            ].map((note, index) => (
              <Link
                to={`/notes/${note.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className={`flex justify-between items-center group p-2 rounded ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } transition-colors duration-300`}
              >
                <span className="group-hover:text-blue-500 transition-colors duration-300 flex items-center">
                  {note.title}
                  <ArrowRight
                    className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                    size={16}
                  />
                </span>
                <span
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } text-sm`}
                >
                  {note.weeks} weeks ago
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
