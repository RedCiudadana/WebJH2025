import React, { useState, useEffect } from 'react';
import { Linkedin, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenLinkedInPopup');
    const hasScrolledEnough = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      return scrollPercentage >= 70;
    };

    if (!hasSeenPopup) {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem('hasSeenLinkedInPopup', 'true');
      }, 20000);

      const scrollHandler = () => {
        if (hasScrolledEnough()) {
          setIsVisible(true);
          localStorage.setItem('hasSeenLinkedInPopup', 'true');
          window.removeEventListener('scroll', scrollHandler);
        }
      };

      window.addEventListener('scroll', scrollHandler);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, []);

  const handleConnect = () => {
    window.open('https://www.linkedin.com/in/julio-herrera-toledo-gt/', '_blank', 'noopener,noreferrer');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm animate-slide-up">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={t('linkedin.close')}
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-3">
            <Linkedin className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-primary mb-2">
            {t('linkedin.title')}
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {t('linkedin.description')}
          </p>
          <button
            onClick={handleConnect}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Linkedin size={20} />
            {t('linkedin.connect')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;