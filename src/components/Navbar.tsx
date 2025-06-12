import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '../assets/images/WJ-17.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (location.pathname === '/') {
      const sections = ['home', 'profile', 'experience', 'projects', 'publications', 'blog', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const menuItems = [
    { id: 'home', label: t('nav.home'), path: '/' },
    { id: 'profile', label: t('nav.profile'), path: '/#profile' },
    { id: 'experience', label: t('nav.experience'), path: '/#experience' },
    { id: 'projects', label: t('nav.projects'), path: '/#projects' },
    { id: 'publications', label: t('nav.publications'), path: '/#publications' },
    { id: 'blog', label: t('nav.blog'), path: '/blog' },
    { id: 'contact', label: t('nav.contact'), path: '/#contact' }
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const topBarHeight = 32; // Height of social top bar
      const navbarHeight = 64; // Height of navbar
      const totalOffset = topBarHeight + navbarHeight;
      
      window.scrollTo({
        top: element.offsetTop - totalOffset,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const isHomePage = location.pathname === '/';
  const shouldShowDarkNav = !scrolled && isHomePage;

  return (
    <nav 
      className={`fixed top-8 w-full z-40 transition-all duration-300 ${
        scrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`font-bold text-2xl transition-colors ${
            shouldShowDarkNav ? 'text-white' : 'text-primary'
          }`}
        >
          <img src={Logo} width={60}/>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={(e) => {
                if (item.path.startsWith('/#')) {
                  e.preventDefault();
                  scrollToSection(item.id);
                }
              }}
              className={`transition-colors hover:text-green ${
                shouldShowDarkNav ? 'text-white' : 'text-gray-800'
              } ${activeSection === item.id && isHomePage ? 'font-semibold text-green' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded border ${
              shouldShowDarkNav
                ? 'border-white text-white hover:bg-white hover:text-primary'
                : 'border-primary text-primary hover:bg-primary hover:text-white'
            } transition-colors`}
          >
            <Globe size={16} />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} className={shouldShowDarkNav ? 'text-white' : 'text-primary'} />
          )}
        </button>
      </div>

      <div
        className={`md:hidden bg-white absolute w-full transition-all duration-300 shadow-lg ${
          isOpen ? 'max-h-[400px] py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={(e) => {
                if (item.path.startsWith('/#')) {
                  e.preventDefault();
                  scrollToSection(item.id);
                }
                setIsOpen(false);
              }}
              className={`block py-2 hover:text-green ${
                activeSection === item.id && isHomePage ? 'font-semibold text-green' : 'text-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button 
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="flex items-center gap-1 text-sm font-medium px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors w-20"
          >
            <Globe size={16} />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;