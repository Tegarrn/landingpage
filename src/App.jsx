import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CodeCard from './components/CodeCard'
import Footer from './components/Footer'
import { useTheme } from './themeconfig'

function App() {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for animation effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" 
            role="status"
            style={{ color: isDarkMode ? '#6366f1' : '#4f46e5' }}>
          </div>
          <h2 className={`mt-4 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <Hero />
          <About />
          <CodeCard />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App