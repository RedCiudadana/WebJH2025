import React from 'react';
import { Award, BarChart3, BookOpen, Briefcase as BriefcaseBusiness, Languages, Shapes } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ImagenPersonal from '../assets/images/WJ-06.png';

const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { name: t('about.skills.digitalGov'), icon: <BarChart3 className="w-6 h-6 text-green" /> },
    { name: t('about.skills.openGov'), icon: <Shapes className="w-6 h-6 text-green" /> },
    { name: t('about.skills.anticorruption'), icon: <Award className="w-6 h-6 text-green" /> },
    { name: t('about.skills.publicInnovation'), icon: <BookOpen className="w-6 h-6 text-green" /> },
    { name: t('about.skills.capacityBuilding'), icon: <BriefcaseBusiness className="w-6 h-6 text-green" /> },
    { name: t('about.skills.languages'), icon: <Languages className="w-6 h-6 text-green" /> },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
        <div className="w-20 h-1 bg-green mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold mb-6 text-primary">{t('about.name')}</h3>
          <p className="text-lg mb-6 leading-relaxed">
            {t('about.description1')}
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            {t('about.description2')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {skill.icon}
                <span className="mt-2 text-center font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-xl transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-white p-3 rounded-xl shadow-lg border-2 border-primary">
              <img 
                src={ImagenPersonal}
                alt="Julio Herrera Toledo" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="font-bold">{t('about.experience')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;