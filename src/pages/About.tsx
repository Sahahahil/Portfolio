
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'Khwopa College of Engineering',
      period: '2021 – Present',
      description: 'Currently pursuing comprehensive studies in computer engineering with focus on AI and software development.'
    },
    {
      degree: 'Higher Secondary Level',
      institution: 'Khwopa Secondary School',
      period: '2019 – 2021',
      description: 'Completed higher secondary education with strong foundation in mathematics and sciences.'
    },
    {
      degree: 'Lower & Secondary Level',
      institution: 'Nyatapola Secondary School',
      period: '2007 – 2019',
      description: 'Foundational education with excellent academic performance and early interest in technology.'
    }
  ];

  const experience = [
    {
      role: 'DataCamp Fellowship',
      organization: 'Code for Nepal',
      period: '2023 – Present',
      description: 'Participated in comprehensive data science training program, enhancing skills in Python, data analysis, and machine learning applications.'
    },
    {
      role: 'Technical Support',
      organization: 'Hult Prize on Campus',
      period: '2022 – 2023',
      description: 'Provided technical support for campus innovation challenges, helping students develop and present technology solutions.'
    }
  ];

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm a passionate Computer Engineering student with a deep fascination for artificial intelligence, 
            data science, and computer vision. My journey combines academic excellence with hands-on project 
            experience, constantly exploring innovative solutions in the tech world.
          </p>
        </div>

        {/* Personal Story */}
        <div className="mb-16">
          <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <CardTitle className={`text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                From a young age, I've been captivated by the endless possibilities of technology. My academic 
                journey at Khwopa College of Engineering has provided me with a solid foundation in computer 
                engineering principles, while my passion projects have allowed me to dive deep into cutting-edge 
                technologies like AI, machine learning, and computer vision. I believe in learning by doing, 
                which is why I've developed numerous projects ranging from deepfake detection systems to AI-powered 
                travel assistants. My goal is to contribute to the advancement of technology while solving 
                real-world problems through innovative solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                      <GraduationCap className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {edu.degree}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {edu.institution}
                        </span>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                      <Briefcase className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                          {exp.organization}
                        </span>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
