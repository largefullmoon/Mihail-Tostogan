import React from 'react';
import { skills } from '../../data/skills';
import SkillBar from './SkillBar';
import TechCarousel from './TechCarousel';

const Skills: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const aiSkills = skills.filter(skill => skill.category === 'ai');
  const devOpsSkills = skills.filter(skill => skill.category === 'devOps');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive skill set spanning frontend development, backend systems, AI/ML technologies, 
            and DevOps practices. Continuously learning and adapting to emerging technologies.
          </p>
        </div>

        <div className="mb-16 animate-fade-in-up animation-delay-200">
          <TechCarousel />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 hover-lift animate-fade-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800">Frontend Development</h3>
            </div>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl shadow-lg border border-teal-200 hover-lift animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-teal-800">Backend Systems</h3>
            </div>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-purple-200 hover-lift animate-fade-in-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800">AI & Machine Learning</h3>
            </div>
            {aiSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg border border-orange-200 hover-lift animate-fade-in-left animation-delay-600">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-orange-800">DevOps & Automation</h3>
            </div>
            {devOpsSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border border-green-200 hover-lift animate-fade-in-up animation-delay-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-green-800">Integration & APIs</h3>
            </div>
            {otherSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>

          {/* Additional Info Card */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200 hover-lift animate-fade-in-right animation-delay-1000">
            <div className="text-center h-full flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 mb-6">
                Always exploring new technologies and methodologies to stay at the forefront of development.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>• Regular skill assessments</p>
                <p>• Industry best practices</p>
                <p>• Emerging tech adoption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;