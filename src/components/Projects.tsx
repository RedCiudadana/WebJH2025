import React, { useState } from 'react';
import { ExternalLink, Filter, LayoutGrid, List } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { t, language } = useLanguage();

  const projectsData = {
    es: [
      {
        id: 1,
        title: "Global Data Barometer – Guatemala",
        organization: "ILDA",
        year: "2024",
        category: "Investigación",
        description: "Evaluación nacional contribuyendo al Barómetro Global de Datos y al monitoreo de los ODS.",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 2,
        title: "National Open Data Infrastructure",
        organization: "DAI / USAID",
        year: "2023",
        category: "Consultoría",
        description: "Asesoramiento sobre infraestructura nacional de datos abiertos y diseño de gobernanza institucional.",
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 3,
        title: "National Public Innovation Strategy",
        organization: "UNDP",
        year: "2022",
        category: "Estrategia",
        description: "Co-autor de la Estrategia Nacional de Innovación Pública aplicando metodologías de TdC y GBR.",
        image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 4,
        title: "Digital Ecosystem Country Assessment",
        organization: "DAI / USAID",
        year: "2021",
        category: "Investigación",
        description: "Evaluación de capacidades digitales nacionales, infraestructura y brechas de gobernanza.",
        image: "https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 5,
        title: "Open Contracting Implementation",
        organization: "HIVOS",
        year: "2020",
        category: "Implementación",
        description: "Promoción de la adopción de buenas prácticas de Contratación Abierta y el Estándar de Datos (OCDS) en 4 países.",
        image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 6,
        title: "Health Procurement Report: NuestraSalud",
        organization: "Red Ciudadana",
        year: "2021",
        category: "Publicación",
        description: "Análisis de datos de contratación en el sector salud con enfoque en transparencia y eficiencia.",
        image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      }
    ],
    en: [
      {
        id: 1,
        title: "Global Data Barometer – Guatemala",
        organization: "ILDA",
        year: "2024",
        category: "Research",
        description: "National assessment contributing to the Global Data Barometer and SDG monitoring.",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 2,
        title: "National Open Data Infrastructure",
        organization: "DAI / USAID",
        year: "2023",
        category: "Consulting",
        description: "Advisory on national open data infrastructure and institutional governance design.",
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 3,
        title: "National Public Innovation Strategy",
        organization: "UNDP",
        year: "2022",
        category: "Strategy",
        description: "Co-author of the National Public Innovation Strategy applying ToC and RBM methodologies.",
        image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 4,
        title: "Digital Ecosystem Country Assessment",
        organization: "DAI / USAID",
        year: "2021",
        category: "Research",
        description: "Assessment of national digital capabilities, infrastructure and governance gaps.",
        image: "https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 5,
        title: "Open Contracting Implementation",
        organization: "HIVOS",
        year: "2020",
        category: "Implementation",
        description: "Promotion of Open Contracting best practices adoption and Data Standard (OCDS) in 4 countries.",
        image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      },
      {
        id: 6,
        title: "Health Procurement Report: NuestraSalud",
        organization: "Red Ciudadana",
        year: "2021",
        category: "Publication",
        description: "Analysis of health sector procurement data with focus on transparency and efficiency.",
        image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
      }
    ]
  };

  const projects: Project[] = projectsData[language];
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
        <div className="w-20 h-1 bg-green mx-auto"></div>
      </div>

      <div className="flex flex-wrap justify-between items-center mb-8">
        {/* Filters */}
        <div className="flex items-center gap-2 mb-4 md:mb-0 overflow-x-auto pb-2 w-full md:w-auto">
          <Filter size={20} className="text-primary min-w-[20px]" />
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                activeFilter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? t('projects.filter.all') : t(`projects.filter.${category.toLowerCase()}`)}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md ${
              viewMode === 'grid' ? 'bg-green text-white' : 'bg-gray-100 text-gray-700'
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md ${
              viewMode === 'list' ? 'bg-green text-white' : 'bg-gray-100 text-gray-700'
            }`}
            aria-label="List view"
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        // Grid View
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="bg-white text-primary p-3 rounded-full hover:bg-green hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('projects.viewProject')} ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                  <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{project.organization}</p>
                <p className="text-gray-700 text-sm">{project.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-green text-white text-xs font-medium px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div className="space-y-4">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-6"
            >
              <div className="w-full md:w-1/4 h-48 md:h-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{project.organization}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-green text-white text-xs font-medium px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-primary hover:text-green inline-flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('projects.viewProject')} <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;