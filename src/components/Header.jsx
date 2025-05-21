import { useState, useEffect } from 'react';
import { useTheme } from '../themeconfig';
import { Sun, Moon, Menu, X } from 'lucide-react';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrollPosition > 10 
        ? isDarkMode 
          ? 'bg-gray-900/90 backdrop-blur-md border-b border-indigo-900/30' 
          : 'bg-white/90 backdrop-blur-md border-b border-indigo-100/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              AnimeCode
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className={`font-medium ${isDarkMode ? 'text-white hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} transition-colors duration-200`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`font-medium ${isDarkMode ? 'text-white hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} transition-colors duration-200`}
            >
              About
            </a>
            <a 
              href="#sourcecode" 
              className={`font-medium ${isDarkMode ? 'text-white hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} transition-colors duration-200`}
            >
              Source Code
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-200 text-indigo-700 hover:bg-gray-300'
              } transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-indigo-500 hover:text-indigo-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <a
                href="#home"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode 
                    ? 'text-white hover:bg-gray-800' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode 
                    ? 'text-white hover:bg-gray-800' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#sourcecode"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode 
                    ? 'text-white hover:bg-gray-800' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Source Code
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;