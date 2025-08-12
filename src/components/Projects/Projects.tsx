import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  // Find the featured project
  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore my latest work showcasing AI-powered solutions, full-stack applications, 
            and innovative automation systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProject && (
            <div className="md:col-span-2 lg:col-span-2 animate-fade-in-left">
              <ProjectCard project={featuredProject} featured={true} />
            </div>
          )}
          
          {regularProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`animate-fade-in-up animation-delay-${Math.min(index * 200, 1000)}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;