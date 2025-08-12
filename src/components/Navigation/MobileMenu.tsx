import React from 'react';
import { X } from 'lucide-react';
import NavLink from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-white p-4 flex flex-col">
      <div className="flex justify-end">
        <button 
          onClick={onClose}
          className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-6 h-full text-xl">
        <NavLink href="#home" onClick={onClose}>Home</NavLink>
        <NavLink href="#projects" onClick={onClose}>Projects</NavLink>
        <NavLink href="#skills" onClick={onClose}>Skills</NavLink>
        <NavLink href="#about" onClick={onClose}>About</NavLink>
        <NavLink href="#contact" onClick={onClose}>Contact</NavLink>
        
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Resume
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;