import React, { useState, useEffect } from 'react';
import { Mail, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
    const hasScrolledEnough = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      return scrollPercentage >= 70;
    };

    if (!hasSeenPopup) {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem('hasSeenNewsletterPopup', 'true');
      }, 20000);

      const scrollHandler = () => {
        if (hasScrolledEnough()) {
          setIsVisible(true);
          localStorage.setItem('hasSeenNewsletterPopup', 'true');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setHasSubscribed(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm animate-slide-up">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={t('newsletter.close')}
        >
          <X size={20} />
        </button>

        {!hasSubscribed ? (
          <>
            <div className="text-center mb-4">
              <div className="inline-block p-2 bg-green rounded-full mb-3">
                <Mail className="w-6 h-6 text-green" />
              </div>
              <h2 className="text-xl font-bold text-primary mb-2">
                {t('newsletter.title')}
              </h2>
              <p className="text-sm text-gray-600">
                {t('newsletter.description')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm bg-primary text-white rounded-md font-medium hover:bg-blue-900 transition-colors flex items-center justify-center"
              >
                {t('newsletter.subscribe')}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3 text-center">
              {t('newsletter.disclaimer')}
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="inline-block p-2 bg-green-100 rounded-full mb-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-primary mb-2">
              {t('newsletter.thanks')}
            </h2>
            <p className="text-sm text-gray-600">
              {t('newsletter.thanksDesc')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;