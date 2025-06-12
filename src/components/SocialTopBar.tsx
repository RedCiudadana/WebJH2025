import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const SocialTopBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-primary text-white py-2 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center space-x-4">
          <a 
            href="https://linkedin.com/in/julio-herrera-toledo-gt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green transition-colors flex items-center gap-1"
          >
            <Linkedin size={16} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a 
            href="https://twitter.com/julioht" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green transition-colors flex items-center gap-1"
          >
            <Twitter size={16} />
            <span className="text-sm">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialTopBar;