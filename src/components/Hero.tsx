import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  AI & Computer Vision Enthusiast
                </span>
              </div>
              <h1
                className={`text-5xl lg:text-7xl font-bold leading-tight ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Sahil
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Duwal
                </span>
              </h1>
              <p
                className={`text-xl leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Bachelor of Computer Engineering student passionate about AI, data science,
                computer vision, and exploring innovative technology solutions through hands-on
                projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div
                  className={`text-3xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  7+
                </div>
                <div
                  className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  Years of Experience
                </div>
              </div>
              <div>
                <div
                  className={`text-3xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  15+
                </div>
                <div
                  className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  Projects Completed
                </div>
              </div>
              <div>
                <div
                  className={`text-3xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  100%
                </div>
                <div
                  className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 animate-pulse delay-1000"></div>

              {/* Large Transparent Profile Image */}
              <div className="relative z-10 w-full flex justify-center -mt-16">
                <img
                  src={`${import.meta.env.BASE_URL}images/me.png`}
                  alt="Profile picture of Sahil"
                  className="w-[28rem] h-auto object-contain"
                />
              </div>

              {/* Floating Labels */}
              <div
                className={`absolute top-20 -left-8 px-4 py-2 rounded-lg shadow-lg ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                } animate-bounce delay-500`}
              >
                <div className="text-sm font-medium">AI Enthusiast</div>
              </div>

              <div
                className={`absolute bottom-20 -right-8 px-4 py-2 rounded-lg shadow-lg ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                } animate-bounce delay-1000`}
              >
                <div className="text-sm font-medium">Computer Vision</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
