
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 80 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'PyTorch', level: 85 },
        { name: 'scikit-learn', level: 80 },
        { name: 'Computer Vision', level: 85 },
        { name: 'Deep Learning', level: 80 },
        { name: 'NLP', level: 75 },
        { name: 'Machine Learning', level: 85 }
      ]
    },
    {
      title: 'Data Science & Analytics',
      skills: [
        { name: 'NumPy', level: 90 },
        { name: 'Pandas', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Statistical Modeling', level: 75 }
      ]
    },
    {
      title: 'Web Development & Tools',
      skills: [
        { name: 'FastAPI', level: 80 },
        { name: 'React.js', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'LaTeX', level: 70 },
        { name: 'MySQL', level: 75 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'from-green-400 to-green-600';
    if (level >= 75) return 'from-blue-400 to-blue-600';
    if (level >= 65) return 'from-yellow-400 to-yellow-600';
    return 'from-red-400 to-red-600';
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A comprehensive overview of my technical expertise across various domains including 
            AI, machine learning, web development, and data science.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <CardTitle className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `skillBar 1.5s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="mt-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} text-center hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6">
                <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  AI/ML
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Artificial Intelligence
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Deep expertise in machine learning, neural networks, and computer vision applications.
                </p>
              </CardContent>
            </Card>

            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} text-center hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6">
                <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                  Data
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Data Science
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Proficient in data analysis, visualization, and statistical modeling using Python.
                </p>
              </CardContent>
            </Card>

            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} text-center hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6">
                <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Full-Stack
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Web Development
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Building complete web applications with modern frameworks and APIs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
