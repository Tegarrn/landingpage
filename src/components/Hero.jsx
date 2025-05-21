import { useState, useEffect } from 'react';
import { useTheme } from '../themeconfig';
import SocialButtons from './SocialButtons';

function Hero() {
  const { isDarkMode } = useTheme();
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  
  const codingTexts = [
    "Code with Anime Style",
    "Build Amazing Websites",
    "Create Beautiful UIs",
    "Master React & Javascript"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Text animation
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % codingTexts.length);
    }, 3000);
    
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(textInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden ${
        isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 to-white'
      }`}
    >
      {/* Anime-style background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className={`absolute top-20 left-20 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-indigo-900/20' : 'bg-indigo-200/40'
        } blur-3xl animate-blob`}></div>
        <div className={`absolute top-40 right-20 w-72 h-72 rounded-full ${
          isDarkMode ? 'bg-purple-900/20' : 'bg-purple-200/40'
        } blur-3xl animate-blob animation-delay-2000`}></div>
        <div className={`absolute bottom-20 left-1/3 w-80 h-80 rounded-full ${
          isDarkMode ? 'bg-pink-900/20' : 'bg-pink-200/40'
        } blur-3xl animate-blob animation-delay-4000`}></div>
        
        {/* Code particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className={`absolute animate-float text-xs ${
                isDarkMode ? 'text-indigo-500/30' : 'text-indigo-500/20'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${15 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {['<div>', '</div>', '<span>', '{code}', 'React', 'const', 'function()', 'return', '</>'][Math.floor(Math.random() * 9)]}
            </div>
          ))}
        </div>
      </div>

      <div 
        className={`relative z-10 max-w-5xl mx-auto text-center transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        } transition-all duration-1000 ease-out`}
      >
        {/* Profile Image - Anime Style */}
        <div className="relative w-48 h-48 mx-auto mb-8 md:mb-12 overflow-hidden">
          <div className={`w-48 h-48 rounded-full mx-auto border-4 ${
            isDarkMode ? 'border-indigo-600' : 'border-indigo-500'
          } overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300`}>
            {/* Replace with your image - using placeholder for now */}
            <img 
              src="/api/placeholder/192/192" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Anime-style glow effect */}
          <div className={`absolute inset-0 rounded-full ${
            isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'
          } opacity-20 blur-xl transform scale-110 animate-pulse`}></div>
        </div>

        <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Coding Tutorials
          </span>
        </h1>

        <div className="h-12 md:h-16 mb-6">
          <h2 className={`text-xl md:text-3xl font-medium ${
            isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
          }`}>
            {codingTexts[textIndex]}{showCursor ? '|' : ''}
          </h2>
        </div>

        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Follow my tutorials, grab source code, and level up your coding skills with anime-inspired projects!
        </p>

        <SocialButtons />

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#sourcecode" 
            className={`px-8 py-3 rounded-full font-bold text-white shadow-lg transform hover:scale-105 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 shadow-indigo-700/30' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-indigo-600/30'
            }`}
          >
            Source Code
          </a>
          <a 
            href="#about" 
            className={`px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg shadow-gray-900/30' 
                : 'bg-white text-indigo-700 hover:bg-gray-100 shadow-lg shadow-gray-200/50'
            }`}
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={isDarkMode ? "text-indigo-400" : "text-indigo-600"}
        >
          <path 
            d="M7 13L12 18L17 13" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M7 7L12 12L17 7" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Add CSS animation classes */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(20px, 30px) scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-100px) rotate(10deg); }
        }
        
        .animate-blob {
          animation: blob 15s infinite alternate;
        }
        
        .animate-float {
          animation: float 20s infinite linear;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Hero;