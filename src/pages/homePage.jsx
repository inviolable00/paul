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
  ArrowSquareOut,
} from "@phosphor-icons/react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sections = [
    {
      title: "Interests",
      icon: Lightbulb,
      body: [
        "Low Level Programming",
        "Quantum Computing (compilation)",
        "Deep Learning",
      ],
      desc: [
        "classical compilation, OS dev, reverse engineering",
        "quantum compilation, quantum machine learning",
        "transormers, deep reinforcement learning",
      ],
      link: ["", "", ""],
    },
    {
      title: "Publications",
      icon: Book,
      body: [
        "Computer Science for Quantum Computing: A Review",
        "Reverse Engineering Memory Management Functions for the MSVC Compiler",
      ],
      desc: [
        "an easy to understand intro to quantum computing for people in comp sci",
        "worked on reverse engineering custom implementations of malloc, calloc, free, realloc for ease of understanding of the inner workings of compilers and how they interact directly with the OS and other OS specific functions",
      ],
      link: [
        "https://www.ejmanager.com/mnstemps/262/262-1688073623.pdf?t=1726615424",
        "https://drive.google.com/file/d/14xT7T-hm7zfnCMiZ9Llb_3DyR0t-sspy/view?usp=share_link",
      ],
    },
    {
      title: "Projects",
      icon: Code,
      body: [
        "Simple Quantum Simulator in C",
        "Auto Free",
        "Infleqtion - Quantum Computer-Aided Design of Atomic Clocks",
        "Simple Autograd: C",
        "Ibegwu- a Web App",
        "Parallelizing a Custom Written Transformer Model",
      ],
      desc: [
        "using a set of universal basis gates, of CNOT, Hadamard, NOT (X), and T gates, I implemented both matrix multiplication and direct individual qubit manipulation to compare the efficiency and downsides of each approach. the direct individual qubit manipulation runs exponentially faster",
        "auto allocated memory freer in C",
        "wrote and optimized openQasm code to reduce quantum circuit depth",
        "autograd for math expression in C (inspired by andrej karpathy)",
        "an app for speakers of my native language (igala) to learn about their history and language",
        "tried parallelizing a custom written transformer model",
      ],
      link: [
        "https://github.com/feelerx/qc_simulator",
        "https://github.com/feelerx/autofreer",
        "https://github.com/feelerx/QRise2024",
        "https://github.com/feelerx/AutoGrad",
        "https://github.com/inviolable00/ibegwu",
        "",
      ],
    },
    {
      title: "Currently Working On",
      icon: Bookmark,
      body: [
        "Quantum Simulator Compilation Using LLVM IR",
        "Working on LLVM and MLIR frameworks",
        "Tabula-Rasa",
        "Ibegwu",
        "MakeMore",
      ],
      desc: [
        "modifying my quantum simulator to generate LLVM Intermediate Representation (LLVM IR) for optimization and portability. This transformation will involve generating LLVM IR code for quantum gates and their operations while adhering to the rules of LLVM's type system and IR structures",
        "Currently exploring the LLVM and MLIR frameworks with aim of making contributions to open source projects like Catalyst",
        "a start up for african languages",
        "an app for speakers of my native language (igala) to learn about their history and language",
        "attempts at generating AI names (inspired by andrej karpathy)",
      ],
      link: [
        "https://github.com/feelerx/qc_simulator",
        "",
        "",
        "https://tabularasaone.vercel.app",
        "https://github.com/inviolable00/ibegwu",
        "https://github.com/feelerx/MakeMore",
      ],
    },
    {
      title: "Hobbies",
      icon: Palette,
      body: [
        "Watching Anime and Movies",
        "Reading Novels",
        "Learning New Interesting Things",
      ],
      desc: [
        "watched over 500+ anime and movies (favorites: naruto, bladerunner2049)",
        "love russian writers and classic novels (favorites: dostoevsky, tolstoy)",
        "read on random things I find interesting especially in physics, nature, psychology, philosophy, history, african politics and more",
      ],
      link: ["", "", ""],
    },
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
      } py-6 px-4 sm:px-6 lg:px-8 font-serif transition-colors duration-300`}>
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
          <ol className="flex space-x-4 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1M6MtKktb9nLzaz81PAkh6abP1AGnrqXf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors">
                CV
              </a>
            </li>
            {/* <li>
              <a
                href="https://drive.google.com/file/d/1EtMvf7vZNojO9uQpITx1vXI-ZNzGqiS5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors">
                Research Statement
              </a>
            </li> */}
          </ol>
          <button
            className={`p-2 rounded-full ${
              darkMode ? "bg-white text-gray-900" : "bg-gray-300 text-gray-700"
            } transition-all duration-300 hover:scale-110`}
            onClick={toggleDarkMode}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>

        <header className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src="paul.jpeg"
              className="w-20 h-20 rounded-full group-hover:animate-pulse"></img>
            <h1 className="text-4xl font-thin font-sans transition-colors duration-300">
              Paul Onoja
            </h1>
          </Link>
        </header>

        <section className="mb-16 prose prose-lg dark:prose-invert max-w-none">
          <p className="text-2xl ml-4 mb-4">My name is ^</p>
          <p className="mb-4">
            I fancy computers, science in general, art, philosophy and the history of african
            politics. Also a Dostoevsky and Naruto fanboy&#128519;
          </p>
          <p>
            Computing wise, I am interested in low-level programming, quantum
            computing and deeplearning. I am also a cofounder and CTO of
            <a
              href="https://tabularasaone.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              {" "}
              tabula rasa
            </a>
            .<br></br>As a computer scientist, I enjoy working on various
            computing projects. I am currently interested in contributing to open source classical and quantum software frameworks. Feel free to reach out through my{" "}
            <a
              href="mailto:onojaopaul@gmail.com"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer">
              email
            </a>{" "}
            if you have any project or opportunity you think might interest me.
          </p>
        </section>

        {sections.map((section, index) => (
          <section
            key={index}
            className={`mb-16 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg p-6 border-l-4 ${
              index % 2 === 0 ? "border-cyan-900" : "border-blue-400"
            } transition-colors duration-300`}>
            <h2
              className={`text-2xl font-medium mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center ${
                darkMode ? "text-cyan-600" : "text-cyan-600"
              }`}>
              <section.icon size={24} className="mr-2" />
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.body.map((item, idx) => (
                <div key={idx}>
                  {section.link[idx] ? (
                    <a
                      href={section.link[idx]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group">
                      <h3 className="text-xl font-medium text-blue-300 group-hover:text-blue-600 transition-colors duration-300 flex items-center">
                        {item}
                        <span className="relative ml-2 w-5 h-5">
                          <ArrowSquareOut
                            className="absolute inset-0 text-blue-400 group-hover:opacity-0 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-blue-300 transition-all duration-300"
                            size={12}
                          />
                          <ArrowRight
                            className="absolute inset-0 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 dark:text-blue-500 transition-all duration-300"
                            size={20}
                          />
                        </span>
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-xl font-medium">{item}</h3>
                  )}
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } mt-1`}>
                    {section.desc && section.desc[idx]
                      ? // ? section.desc[idx]
                        // ALL THESE JUST TO ADD A LINK TO THE WORD QUPLEXITY
                        // CAN REMOVE ALL THESE AND JUST UNCOMMENT THE ONE LINE ABOVE
                        // I DON'T LIKE AS IT BRINGS ABOUT UNNECESSARY COMPLEXITY
                        section.desc[idx]
                          .split("Catalyst")
                          .map((part, i, arr) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <a
                                  href="https://github.com/PennylaneAI/catalyst"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-300 hover:text-blue-600">
                                  Catalyst
                                </a>
                              )}
                            </React.Fragment>
                          ))
                      : `Brief description of ${item.toLowerCase()} project or interest.`}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* SEPERATED FROM OTHERS BECAUSE WOULD NEED FREQUENT UPDATES
            DIDN'T WANT TO MERGE THEM IN SAME PLACE BASICALLY */}
        <section
          className={`mb-16 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg p-6 border-l-4 border-blue-400 transition-colors duration-300`}>
          <h2
            className={`text-2xl font-medium mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center ${
              darkMode ? "text-cyan-600" : "text-cyan-600"
            }`}>
            <Bookmark size={24} className="mr-2" />
            BookMarks
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "My Favorite Goto Tech Blog",
                link: "https://mohitmishra786.github.io/UnderTheHood/",
              },
              {
                title:
                  "Quantum Convolutional Neural Networks Useless?? They Might be Classically Simulatable",
                link: "https://arxiv.org/abs/2408.12739",
              },
              {
                title: "First HyperDimensional Computing Operating System??",
                link: "https://github.com/NeoVertex1/ComplexTensor",
              },
              {
                title: "Deep Q Networks Explained",
                link: "https://www.lesswrong.com/posts/kyvCNgx9oAwJCuevo/deep-q-networks-explained",
              },
              {
                title: "Clever Infinite Git Storage Using Commits",
                link: "https://x.com/bozo10n/status/1839178540484346362",
              },
              {
                title: "Resource Management in Aurora Serverless",
                link: "https://brooker.co.za/blog/2024/07/29/aurora-serverless.html",
              },
              {
                title: "Distributed System Toy Implementation (Maelstrom)",
                link: "https://github.com/jepsen-io/maelstrom",
              },
              {
                title: "Youtube Video Downloader Written Entirely in C",
                link: "https://x.com/7etsuo/status/1839517705952751721",
              },
              {
                title: "Branch and Jump Tables in C and x86 assembly",
                link: "https://x.com/7etsuo/status/1761469198042309011",
              },
              {
                title: "Interact With Kernel Space in C",
                link: "https://x.com/chessMan786/status/1841084629408706868",
              },
              {
                title: "Implementing Shared Pointers in C: Taking Control of Memory",
                link: "https://x.com/chessMan786/status/1844235558731596233",
              },
              {
                title: "Implementing Dynamic Linking in C",
                link: "https://x.com/chessMan786/status/1842165601071935949",
              },
              {
                title: "Learn Git Branching",
                link: "https://learngitbranching.js.org",
              },
              {
                title:
                  "Getting Better At Systems Design and Distributed Systems",
                link: "https://x.com/Franc0Fernand0/status/1838840611442409508",
              },
              {
                title: "Algorithmic Trading",
                link: "https://tradingriot.com",
              },
              {
                title: "More on Algorithmic Trading",
                link: "https://x.com/GoshawkTrades/status/1838617105278644591",
              },
              {
                title: "More Algorithmic Trading...",
                link: "https://www.youtube.com/watch?v=xfzGZB4HhEE",
              },
              {
                title:
                  "Machine Learning Uses for Algorithmic Trading Strategies",
                link: "https://x.com/quantscience_/status/1840747434894340538",
              },
              {
                title: "My Two Lives as a Programmer",
                link: "https://www.maxmynter.com/pages/blog/two-lives",
              },
              {
                title: "Project Euler: Math Problems to Solve",
                link: "https://projecteuler.net/archives",
              },
              {
                title: "Teach Yourself Computer Science",
                link: "https://teachyourselfcs.com",
              },
              {
                title:
                  "Algorithms for Optimization, Decision Making, Validation",
                link: "https://algorithmsbook.com",
              },
              {
                title: "Leetcode for Machine Learning???",
                link: "https://www.deep-ml.com",
              },
              {
                title:
                  "Machine Learning in C (easy way to become Sisyphus lol)",
                link: "https://www.youtube.com/playlist?list=PLpM-Dvs8t0VZPZKggcql-MmjaBdZKeDMw",
              },
              {
                title: "No One is Going To Save You",
                link: "https://x.com/HARRY_1G/status/1839577363983565135",
              },
              {
                title: "Search for Similar Papers on Arxiv (cool really)",
                link: "https://searchthearxiv.com",
              },
              {
                title: "NoteBookLM",
                link: "https://notebooklm.google.com/notebook/f7607d7a-584c-4f35-96fc-f6815c573a6c?utm_source=keyword&utm_medium=email&utm_campaign=BTS24&original_referer=https:%2F%2Fblog.google%23&pli=1",
              },
              {
                title: "Currency News and Impact",
                link: "https://www.forexfactory.com",
              },
            ].map((note, index) => (
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`flex justify-between items-center group p-2 rounded ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } transition-colors duration-300`}>
                <span className="text-blue-300 group-hover:text-blue-600 transition-colors duration-300 flex items-center">
                  {note.title}
                  <span className="relative ml-2 w-5 h-5">
                    <ArrowSquareOut
                      className="absolute inset-0 text-blue-300 group-hover:opacity-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      size={12}
                    />
                    <ArrowRight
                      className="absolute inset-0 text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                      size={20}
                    />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
