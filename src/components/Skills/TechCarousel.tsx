import React from 'react';
import { skills } from '../../data/skills';

const techIcons = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'HTML/CSS', icon: '🌐' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'GraphQL', icon: '⬢' },
  { name: 'Git', icon: '📊' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Testing', icon: '🧪' },
];

const TechCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-6 mb-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...techIcons, ...techIcons].map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center mx-4 px-4 py-2 bg-white rounded-lg shadow-sm"
          >
            <span className="text-xl mr-2">{tech.icon}</span>
            <span className="font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;