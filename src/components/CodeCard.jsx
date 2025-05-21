import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../themeconfig';
import { Github, RefreshCw, Code, ExternalLink } from 'lucide-react';

function CodeCard() {
  const { isDarkMode } = useTheme();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Anime Character Dashboard',
      description: 'A React dashboard for tracking your favorite anime characters with stats visualization.',
      tags: ['React', 'TailwindCSS', 'APIs'],
      githubUrl: 'https://github.com/yourusername/anime-dashboard',
      tiktokUrl: 'https://tiktok.com/@yourusername/video/1',
      youtubeUrl: 'https://youtube.com/watch?v=abc123',
      image: '/api/placeholder/400/250', // Replace with actual image path
    },
    {
      id: 2,
      title: 'Ninja Portfolio Template',
      description: 'A stunning animated portfolio website with dark mode and scroll animations.',
      tags: ['NextJS', 'ThreeJS', 'GSAP'],
      githubUrl: 'https://github.com/yourusername/ninja-portfolio',
      tiktokUrl: 'https://tiktok.com/@yourusername/video/2',
      youtubeUrl: 'https://youtube.com/watch?v=def456',
      image: '/api/placeholder/400/250', // Replace with actual image path
    },
    {
      id: 3,
      title: 'Samurai Chat App',
      description: 'Real-time chat application with anime-inspired UI and custom animations.',
      tags: ['React', 'Firebase', 'TailwindCSS'],
      githubUrl: 'https://github.com/yourusername/samurai-chat',
      tiktokUrl: 'https://tiktok.com/@yourusername/video/3',
      youtubeUrl: 'https://youtube.com/watch?v=ghi789',
      image: '/api/placeholder/400/250', // Replace with actual image path
    },
    {
      id: 4,
      title: 'Mecha E-Commerce Store',
      description: 'An anime merchandise store with shopping cart and payment integration.',
      tags: ['React', 'Redux', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/mecha-store',
      tiktokUrl: 'https://tiktok.com/@yourusername/video/4',
      youtubeUrl: 'https://youtube.com/watch?v=jkl012',
      image: '/api/placeholder/400/250', // Replace with actual image path
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="sourcecode"
      ref={sectionRef}
      className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="relative inline-block">
              Source Code Collection
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></span>
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Browse through my coding projects and grab the source code to build your own awesome applications!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-900 hover:shadow-indigo-700/20' 
                  : 'bg-white hover:shadow-indigo-500/20'
              } ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 0.15}s`,
                boxShadow: isDarkMode 
                  ? '0 10px 40px -10px rgba(66, 71, 91, 0.3)' 
                  : '0 10px 40px -10px rgba(66, 71, 91, 0.2)'
              }}
            >
              {/* Card Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                
                {/* Quick action buttons */}
                <div className="absolute top-3 right-3 flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'bg-gray-800/80 text-white hover:bg-indigo-800/90' 
                        : 'bg-white/80 text-gray-800 hover:bg-indigo-600/90 hover:text-white'
                    } transition-colors duration-200`}
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'bg-gray-800/80 text-white hover:bg-pink-700/90' 
                        : 'bg-white/80 text-gray-800 hover:bg-pink-600/90 hover:text-white'
                    } transition-colors duration-200`}
                    aria-label="TikTok"
                  >
                    <svg className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Tag labels */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-indigo-600/80 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {project.description}
                </p>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isDarkMode 
                        ? 'bg-gray-800 text-white hover:bg-gray-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <Code size={16} />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isDarkMode 
                        ? 'bg-indigo-800/50 text-white hover:bg-indigo-700/80' 
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                    }`}
                  >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                    </svg>
                    <span>TikTok Tutorial</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action for more projects */}
        <div 
          className={`mt-16 text-center ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } transition-all duration-1000 ease-out delay-700`}
        >
          <a 
            href="https://github.com/yourusername?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white hover:from-indigo-700 hover:to-purple-800 shadow-indigo-700/30' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-indigo-600/30'
            }`}
          >
            <RefreshCw size={18} />
            <span>Load More Projects</span>
          </a>
          
          <div className="mt-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-sm font-medium ${
                isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
              } transition-colors duration-200`}
            >
              <span>View full GitHub profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Anime-style decorative elements */}
      <div className="absolute right-0 overflow-hidden" style={{ height: "300px", width: "300px", zIndex: 0, opacity: 0.5 }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={isDarkMode ? 'text-indigo-900' : 'text-indigo-200'}>
          <path fill="currentColor" d="M46.5,-47.2C59.1,-35.7,68,-18.9,70.2,-0.8C72.4,17.4,67.9,37,55.4,49.7C42.9,62.3,22.4,68.1,1.2,66.9C-20.1,65.6,-41.1,57.3,-53.1,42.3C-65.1,27.3,-68.1,5.6,-63.6,-13.8C-59.1,-33.3,-47.2,-50.4,-32.5,-61.3C-17.8,-72.2,-0.2,-76.8,14,-71.8C28.3,-66.8,33.9,-58.6,46.5,-47.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}

export default CodeCard;