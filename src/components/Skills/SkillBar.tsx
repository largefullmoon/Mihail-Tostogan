import React, { useEffect, useState, useRef } from 'react';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2,
    });

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  // Determine background color based on category
  const getBgColor = () => {
    switch (skill.category) {
      case 'frontend':
        return 'bg-blue-500';
      case 'backend':
        return 'bg-teal-500';
      default:
        return 'bg-purple-500';
    }
  };

  return (
    <div className="mb-4" ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <span className="text-gray-500">{skill.level}%</span>
      </div>
      
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${getBgColor()} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;