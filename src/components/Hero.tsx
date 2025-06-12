import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Globe, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Slider from '../assets/images/WJ-02.png';


const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      title: t('hero.title1'),
      description: t('hero.desc1'),
      icon: <Globe className="w-12 h-12 text-green" />,
      bg: Slider
    },
    {
      title: t('hero.title2'),
      description: t('hero.desc2'),
      icon: <Award className="w-12 h-12 text-green" />,
      bg: Slider
    },
    {
      title: t('hero.title3'),
      description: t('hero.desc3'),
      icon: <BookOpen className="w-12 h-12 text-green" />,
      bg: Slider
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={
            slide.bg.startsWith('http')
              ? { backgroundImage: `url('${slide.bg}')` }
              : { backgroundImage: `url(${slide.bg})` }
          }
        >
          <div className="absolute inset-0 bg-primary bg-opacity-40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 flex justify-center">
            {slides[currentSlide].icon}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in">
            Julio Herrera Toledo
          </h1>
          <div className="h-16">
            {slides.map((slide, index) => (
              <h2
                key={index}
                className={`text-2xl md:text-3xl font-medium mb-6 transition-all duration-500 ${
                  currentSlide === index
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8 absolute'
                }`}
              >
                {slide.title}
              </h2>
            ))}
          </div>
          <div className="h-16">
            {slides.map((slide, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl text-gray-200 mb-8 transition-all duration-500 delay-300 ${
                  currentSlide === index
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8 absolute'
                }`}
              >
                {slide.description}
              </p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-primary rounded-md font-medium hover:bg-transparent hover:text-white hover:border-2 transition-colors flex items-center justify-center gap-2"
            >
              {t('hero.contact')}
              <ArrowRight size={18} />
            </a>
            <a
              href="#profile"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-primary transition-colors"
            >
              {t('hero.learnMore')}
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-green w-8' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;