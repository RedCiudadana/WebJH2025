import React from 'react';
import { BookOpen, Calendar, ExternalLink, FileText, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Publication {
  id: number;
  title: string;
  type: 'article' | 'report' | 'book' | 'chapter';
  authors: string[];
  publication: string;
  year: string;
  description: string;
  link?: string;
  tags: string[];
}

const Publications: React.FC = () => {
  const { t, language } = useLanguage();

  const publicationsData = {
    es: [
      {
        id: 1,
        title: "Digital Governance and Anti-Corruption: A Framework for Latin America",
        type: "article" as const,
        authors: ["Julio Herrera Toledo", "María González"],
        publication: "Journal of Digital Government",
        year: "2024",
        description: "Este artículo presenta un marco integral para la implementación de estrategias de gobernanza digital orientadas a la prevención y detección de la corrupción en América Latina, basado en el análisis de casos de estudio de 8 países de la región.",
        link: "#",
        tags: ["Gobernanza Digital", "Anticorrupción", "América Latina"]
      },
      {
        id: 2,
        title: "Open Data Implementation Guide for Central American Governments",
        type: "report" as const,
        authors: ["Julio Herrera Toledo"],
        publication: "Organization of American States (OAS)",
        year: "2023",
        description: "Guía práctica para la implementación de políticas de datos abiertos en gobiernos centroamericanos, incluyendo marcos normativos, aspectos técnicos y estrategias de sostenibilidad institucional. Desarrollada en colaboración con ministerios de 6 países.",
        link: "#",
        tags: ["Datos Abiertos", "Centroamérica", "Políticas Públicas"]
      },
      {
        id: 3,
        title: "Civic Technology and Democratic Innovation in the Digital Age",
        type: "chapter" as const,
        authors: ["Julio Herrera Toledo", "Ana Rodríguez", "Carlos Mendoza"],
        publication: "Digital Democracy: Challenges and Opportunities",
        year: "2023",
        description: "Capítulo que analiza el impacto de las tecnologías cívicas en la innovación democrática, explorando casos exitosos de participación ciudadana digital y sus implicaciones para el fortalecimiento de la democracia en la era digital.",
        link: "#",
        tags: ["Tecnología Cívica", "Democracia Digital", "Participación Ciudadana"]
      }
    ],
    en: [
      {
        id: 1,
        title: "Digital Governance and Anti-Corruption: A Framework for Latin America",
        type: "article" as const,
        authors: ["Julio Herrera Toledo", "María González"],
        publication: "Journal of Digital Government",
        year: "2024",
        description: "This article presents a comprehensive framework for implementing digital governance strategies aimed at preventing and detecting corruption in Latin America, based on case study analysis from 8 countries in the region.",
        link: "#",
        tags: ["Digital Governance", "Anti-corruption", "Latin America"]
      },
      {
        id: 2,
        title: "Open Data Implementation Guide for Central American Governments",
        type: "report" as const,
        authors: ["Julio Herrera Toledo"],
        publication: "Organization of American States (OAS)",
        year: "2023",
        description: "Practical guide for implementing open data policies in Central American governments, including regulatory frameworks, technical aspects and institutional sustainability strategies. Developed in collaboration with ministries from 6 countries.",
        link: "#",
        tags: ["Open Data", "Central America", "Public Policy"]
      },
      {
        id: 3,
        title: "Civic Technology and Democratic Innovation in the Digital Age",
        type: "chapter" as const,
        authors: ["Julio Herrera Toledo", "Ana Rodríguez", "Carlos Mendoza"],
        publication: "Digital Democracy: Challenges and Opportunities",
        year: "2023",
        description: "Chapter analyzing the impact of civic technologies on democratic innovation, exploring successful cases of digital citizen participation and their implications for strengthening democracy in the digital age.",
        link: "#",
        tags: ["Civic Technology", "Digital Democracy", "Citizen Participation"]
      }
    ]
  };

  const publications: Publication[] = publicationsData[language];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'report':
        return <BookOpen className="w-5 h-5 text-green-500" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-purple-500" />;
      case 'chapter':
        return <FileText className="w-5 h-5 text-green" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    return t(`publications.type.${type}`);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('publications.title')}</h2>
        <div className="w-20 h-1 bg-green mx-auto"></div>
        <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
          {t('publications.subtitle')}
        </p>
      </div>

      <div className="space-y-8">
        {publications.map((publication) => (
          <div 
            key={publication.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-primary"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {getTypeIcon(publication.type)}
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {getTypeLabel(publication.type)}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {publication.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                  {publication.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Users size={14} className="mr-2" />
                  <span>{publication.authors.join(', ')}</span>
                </div>

                <p className="text-gray-600 font-medium mb-3">
                  {publication.publication}
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {publication.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-green text-white text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {publication.link && (
                  <a 
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-green font-medium transition-colors"
                  >
                    {t('publications.viewPublication')}
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-primary mb-4">{t('publications.collaboration.title')}</h3>
          <p className="text-gray-700 mb-6">
            {t('publications.collaboration.description')}
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-900 transition-colors"
          >
            {t('publications.collaboration.contact')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Publications;