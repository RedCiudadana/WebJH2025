import React from 'react';
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LogoFooter from '../assets/images/WJ-27.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img src={LogoFooter} width={300}/>
            <p className="mb-4 text-gray-300">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/julio-herrera-toledo-gt" className="hover:text-green transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/julioht" className="hover:text-green transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-green transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-green transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">{t('nav.home')}</a>
              </li>
              <li>
                <a href="#profile" className="text-gray-300 hover:text-white transition-colors">{t('nav.profile')}</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">{t('nav.experience')}</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">{t('nav.projects')}</a>
              </li>
              <li>
                <a href="#publications" className="text-gray-300 hover:text-white transition-colors">{t('nav.publications')}</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors">{t('nav.blog')}</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Julio Herrera Toledo. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;