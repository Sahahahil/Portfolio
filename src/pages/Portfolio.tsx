
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioProps {
  darkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Deepfake Detection and Localization',
      description: 'Advanced hybrid ViGNN and U-Net system for detecting and localizing deepfake content with high accuracy metrics.',
      tech: ['PyTorch', 'Computer Vision', 'Deep Learning', 'U-Net', 'ViGNN'],
      features: [
        'High accuracy detection rates',
        'Precise localization of manipulated regions',
        'Robust against various deepfake techniques',
        'Real-time processing capabilities'
      ],
      category: 'AI/ML',
      status: 'Completed'
    },
    {
      title: 'Ghumti: AI Travel Assistant',
      description: 'Intelligent chatbot powered by Llama 3 for providing local bus routes, schedules, and travel information.',
      tech: ['Llama 3', 'NLP', 'Chatbot', 'API Integration'],
      features: [
        'Natural language query processing',
        'Real-time bus schedule information',
        'Route optimization suggestions',
        'Multi-language support'
      ],
      category: 'AI/ML',
      status: 'Completed'
    },
    {
      title: 'Cooking Recipe Portal',
      description: 'Full-stack web application for recipe management with user authentication and advanced search features.',
      tech: ['React.js', 'FastAPI', 'MySQL', 'REST API'],
      features: [
        'User authentication and profiles',
        'Recipe creation and sharing',
        'Advanced search and filtering',
        'Responsive design'
      ],
      category: 'Web Development',
      status: 'Completed'
    },
    {
      title: 'Chess Game with AI',
      description: 'Interactive chess game built with Python and Pygame featuring AI opponent with multiple difficulty levels.',
      tech: ['Python', 'Pygame', 'AI Algorithms', 'Game Development'],
      features: [
        'Multiple AI difficulty levels',
        'Move validation and game rules',
        'Interactive GUI',
        'Game state management'
      ],
      category: 'Game Development',
      status: 'Completed'
    },
    {
      title: 'Pattern Verse – Rug Design Generator',
      description: 'Multi-modal AI system integrating JanusFlow and Stable Diffusion for generating unique rug designs with Gradio UI.',
      tech: ['JanusFlow', 'Stable Diffusion', 'Gradio', 'Multi-modal AI'],
      features: [
        'AI-powered design generation',
        'Multi-modal input processing',
        'Interactive web interface',
        'Customizable design parameters'
      ],
      category: 'AI/ML',
      status: 'Completed'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'from-blue-500 to-purple-500';
      case 'Web Development':
        return 'from-green-500 to-teal-500';
      case 'Game Development':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore my latest projects showcasing expertise in AI, machine learning, web development, 
            and innovative technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:shadow-xl transition-all duration-300 group`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <CardTitle className={`text-xl mb-3 group-hover:text-blue-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded text-xs ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`text-sm flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} max-w-2xl mx-auto`}>
            <CardContent className="p-8">
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Interested in My Work?
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always open to discussing new projects, collaborations, or opportunities. 
                Let's connect and create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Get In Touch
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
