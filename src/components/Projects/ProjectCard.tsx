import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../../types';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.image.length - 1 : prev - 1
    );
  };

  const hasMultipleImages = project.image.length > 1;

  return (
    <>
      <div
        className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover-lift ${
          featured ? 'md:col-span-2 lg:col-span-2' : ''
        }`}
      >
        <div className="relative overflow-hidden h-48 md:h-64">
          <img
            src={project.image[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 project-card-image"
          />
          
          {/* Image Navigation Arrows - Always visible when multiple images */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-1.5 rounded-full transition-all duration-200 z-10 slider-nav-button"
                title="Previous Image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-1.5 rounded-full transition-all duration-200 z-10 slider-nav-button"
                title="Next Image"
              >
                <ChevronRight size={16} />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                {project.image.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 slider-indicator ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white bg-opacity-60 hover:bg-opacity-80'
                    }`}
                    title={`Image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <div className="flex gap-2">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors hover:scale-110"
                  title="View Live Project"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors hover:scale-110"
                  title="View Source Code"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-3 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <span 
                key={index}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full tech-tag hover:bg-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <button
              onClick={openModal}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-1 group-hover:gap-2"
            >
              Case Study <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      {showModal && <ProjectModal project={project} onClose={closeModal} />}
    </>
  );
};

export default ProjectCard;