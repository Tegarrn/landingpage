import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../themeconfig';

function About() {
  const { isDarkMode } = useTheme();
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

  // Coding skills with percentages
  const skills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'Node.js', percentage: 75 },
    { name: 'UI/UX Design', percentage: 85 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></span>
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Coding enthusiast and content creator specializing in web development tutorials with an anime twist!
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } transition-all duration-1000 ease-out`}>
          {/* About Me Content */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              My Story
            </h3>
            <div className={`space-y-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p>
                Hello! I'm a passionate developer and content creator focused on making coding accessible and fun through anime-themed tutorials.
              </p>
              <p>
                With over 5 years of experience in web development, I specialize in creating interactive and visually appealing websites and applications.
              </p>
              <p>
                My journey began when I combined my two passions - anime and coding. Now I create tutorials that not only teach valuable coding skills but also incorporate anime-inspired designs and concepts.
              </p>
              <p>
                Through my TikTok, YouTube, and other social media channels, I share coding tips, project walkthroughs, and source code to help others learn and grow in their development journey.
              </p>
            </div>

            <div className="mt-8">
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                What I Do
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'
                } flex flex-col items-center text-center`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 ${
                    isDarkMode ? 'bg-indigo-900 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className={`font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Coding Tutorials
                  </h4>
                </div>
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'
                } flex flex-col items-center text-center`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 ${
                    isDarkMode ? 'bg-indigo-900 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className={`font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Video Content
                  </h4>
                </div>
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'
                } flex flex-col items-center text-center`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 ${
                    isDarkMode ? 'bg-indigo-900 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className={`font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Source Code
                  </h4>
                </div>
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'
                } flex flex-col items-center text-center`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 ${
                    isDarkMode ? 'bg-indigo-900 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h4 className={`font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Community
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          } transition-all duration-1000 ease-out delay-300`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              My Skills
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.name}
                    </span>
                    <span className={`${
                      isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`}>
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                      style={{ 
                        width: `${skill.percentage}%`,
                        transition: 'width 1.5s ease-in-out',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Anime-inspired decorative elements */}
            <div className="mt-8 relative">
              <div className={`p-6 rounded-lg relative z-10 border ${
                isDarkMode ? 'bg-gray-800/60 border-indigo-900/50' : 'bg-indigo-50/80 border-indigo-100'
              }`}>
                <h4 className={`text-xl font-bold mb-3 ${
                  isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                  My Coding Philosophy
                </h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  "Code like you're writing a story – with purpose, creativity, and a touch of magic. Every line has meaning, every function a purpose, and together they create something beautiful."
                </p>
              </div>
              
              {/* Anime-style accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={isDarkMode ? 'text-indigo-700' : 'text-indigo-500'}>
                  <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="5" />
                  <path d="M0,70 Q25,20 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="10 5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;