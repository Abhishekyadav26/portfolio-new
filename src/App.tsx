import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, MapPin, Clock, Twitter, Type } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  status?: string;
  icon: string;
  link?: string;
}

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link?: string;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      // Check system preference
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects: Project[] = [
    {
      id: '1',
      title: 'TaskFlow [In Progress]',
      description: 'A modern task management app with real-time collaboration and AI-powered insights',
      status: 'Building',
      icon: '🚀',
      link: '#'
    },
    {
      id: '2',
      title: 'CodeSpace [Live]',
      description: 'An online IDE with collaborative coding features and instant deployment',
      status: 'Live',
      icon: '💻',
      link: '#'
    },
    {
      id: '3',
      title: 'DataViz Pro',
      description: 'Interactive data visualization platform for business analytics',
      icon: '📊',
      link: '#'
    },
    {
      id: '4',
      title: 'MindMap AI',
      description: 'AI-powered mind mapping tool for brainstorming and idea organization',
      icon: '🧠',
      link: '#'
    }
  ];

  const posts: Post[] = [
    {
      id: '1',
      title: 'Developer Tooling on Solana',
      excerpt: 'Deep Dive into Developer Tooling on Solana: Strengths, Gaps, and Opportunities',
      date: '2025-07-14',
      readTime: '12 min read',
      link: 'https://medium.com/@aky732244/deep-dive-into-developer-tooling-on-solana-strengths-gaps-and-opportunities-cb52a8622f3e'

    },
    {
      id: '2',
      title: 'Unpacking RWAs on Solana',
      excerpt: 'Unpacking RWAs on Solana: A Deep Dive into Real-World Assets on the Fastest Chain',
      date: '2025-07-06',
      readTime: '12 min read',
      link: 'https://medium.com/@aky732244/unpacking-rwas-on-solana-a-deep-dive-into-real-world-assets-on-the-fastest-chain-bdb3d3a6aced'
    }
  ];

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900/80 border-gray-800' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold">Abhishek Yadav</h1>
              <nav className="hidden md:flex items-center space-x-6">
                <a 
                  href="#writing" 
                  className={`text-sm transition-colors duration-200 hover:${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  writing
                </a>
                <a 
                  href="#projects" 
                  className={`text-sm transition-colors duration-200 hover:${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  projects
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`hidden sm:flex items-center space-x-4 text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{currentTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Kolkata,West Bengal</span>
                </div>
              </div>
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-medium mb-4">
                Yo! I'm Abhishek.
              </h2>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I think some crazy ideas and build them. Sometimes when I get bored,
                I write some random stuffs.
              </p>
            </div>

            <div>
              <h3 className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Summary
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-sm mt-1">•</span>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Currently I'm building amazing products on{' '}
                    <a 
                      href="https://github.com/Abhishekyadav26" target='blank'
                      className={`inline-flex items-center space-x-1 ${
                        darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      } transition-colors duration-200`}
                    >
                      <span>Github</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sm mt-1">•</span>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    I've particate for 15+ Hackathons and Won 1
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sm mt-1">•</span>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    In my free time, I like contribute to the community {' '}
                    <span className="inline-flex items-center space-x-1">
                      <span>Hackquest,</span>
                      <span>Superteam</span>
                      <span>❤️</span>
                    </span>
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sm mt-1">•</span>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    20 years old, based in Kolkata
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="mailto:aky732244@gmail.com" target='blank'
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a 
                href="https://x.com/26Abhishekyadav"  target='blank'
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>


              <a 
                href="https://github.com/Abhishekyadav26/" target='blank'
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhishekkumaryadav26/"  target='blank'
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href="https://t.me/abhisheyadav26"  target='blank'
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Telegram"
              >
                <Type className="w-4 h-4" />
              </a>


              
              <div className={`flex items-center space-x-2 text-sm ml-6 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className={`w-64 h-64 rounded-2xl overflow-hidden shadow-xl ${
                darkMode ? 'shadow-gray-900/50' : 'shadow-gray-200/50'
              }`}>
                <img
                  src="https://raw.githubusercontent.com/Abhishekyadav26/profiles/main/assets/Abhi.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects and Writing Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Projects Section */}
          <section id="projects">
            <h3 className={`text-sm font-medium uppercase tracking-wider mb-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Projects
            </h3>
            <div className="space-y-6">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={`group p-4 rounded-xl transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                      : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {project.title}
                        </h4>
                        {project.status && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            project.status === 'Live' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {project.status}
                          </span>
                        )}
                        {project.link && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        )}
                      </div>
                      <p className={`text-sm leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Writing Section */}
          <section id="writing">
            <h3 className={`text-sm font-medium uppercase tracking-wider mb-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Writing
            </h3>
            <div className="space-y-6">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <article 
                    key={post.id}
                    className={`group p-4 rounded-xl transition-all duration-200 cursor-pointer ${
                      darkMode 
                        ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                        : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {post.title}
                      </h4>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <p className={`text-sm leading-relaxed mb-3 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {post.excerpt}
                    </p>
                    <div className={`flex items-center space-x-2 text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                ))
              ) : (
                <div className={`p-8 text-center rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700/50' 
                    : 'bg-white border border-gray-200'
                }`}>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    I am too lazy to write :')
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className={`mt-24 border-t ${
        darkMode ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className={`text-center text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <p>Built with React, TypeScript & Tailwind CSS</p>
            <p className="mt-2">© 2024 Alex Johnson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;