import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Experience {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  expanded?: boolean;
}

const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  
  const experiencesData = {
    es: [
      {
        id: 1,
        title: "Open Data Officer Consultant",
        organization: "Organization of American States (OAS)",
        location: "Honduras",
        period: "2024 – 2025",
        description: [
          "Diseñó la Política Nacional de Datos Abiertos e Interoperabilidad beneficiando a más de 10 entidades públicas.",
          "Impartió más de 10 talleres para desarrollar capacidades institucionales en gobernanza digital y reutilización de datos cívicos.",
          "Proporcionó asesoramiento de alto nivel alineado con los marcos regionales de transparencia y los objetivos de gobernanza inclusiva."
        ],
        expanded: true
      },
      {
        id: 2,
        title: "Public Innovation Facilitator",
        organization: "Fundación MUNUS",
        location: "Spain",
        period: "2024",
        description: [
          "Facilitó procesos de co-creación y diseño digital participativo con más de 100 actores locales.",
          "Integró metodologías de innovación digital para procesos de curso."
        ]
      },
      {
        id: 3,
        title: "Digitalization Consultant – Local Government",
        organization: "USAID / Somos Ciudad",
        location: "Guatemala",
        period: "2024",
        description: [
          "Desarrolló estrategias de gobernanza digital y marcos de interoperabilidad para más de 20 municipios.",
          "Apoyó esfuerzos de desarrollo de capacidades para mejorar la toma de decisiones basada en datos a nivel local."
        ]
      },
      {
        id: 4,
        title: "Executive Director & Co-founder",
        organization: "Red Ciudadana",
        location: "Central America",
        period: "2011 – Present",
        description: [
          "Lideró más de 60 proyectos promoviendo gobierno abierto, tecnología cívica y anticorrupción, impactando a más de 5 millones de ciudadanos.",
          "Gestionó más de $1.5M en financiamiento, aplicó prácticas de GBR y supervisó sistemas de monitoreo y evaluación.",
          "Implementó herramientas de IA para monitoreo de justicia y pronóstico de políticas; asesoró a SEGEPLAN, MINFIN, MINECO.",
          "Fomentó asociaciones público-privadas con Fundesa, Agexport y Guatemala No Se Detiene."
        ]
      },
      {
        id: 5,
        title: "Advocacy Officer & Open Contracting Consultant",
        organization: "HIVOS",
        location: "Central America and Bolivia",
        period: "2016 – 2020",
        description: [
          "Promovió la adopción de buenas prácticas de Contratación Abierta y el Estándar de Datos (OCDS) en 4 países.",
          "Desarrolló programas de capacitación para la sociedad civil y periodismo de investigación sobre datos de contratación."
        ]
      }
    ],
    en: [
      {
        id: 1,
        title: "Open Data Officer Consultant",
        organization: "Organization of American States (OAS)",
        location: "Honduras",
        period: "2024 – 2025",
        description: [
          "Designed the National Open Data and Interoperability Policy benefiting over 10 public entities.",
          "Delivered over 10 workshops to develop institutional capacities in digital governance and civic data reuse.",
          "Provided high-level advisory aligned with regional transparency frameworks and inclusive governance objectives."
        ],
        expanded: true
      },
      {
        id: 2,
        title: "Public Innovation Facilitator",
        organization: "Fundación MUNUS",
        location: "Spain",
        period: "2024",
        description: [
          "Facilitated co-creation and participatory digital design processes with over 100 local stakeholders.",
          "Integrated digital innovation methodologies for ongoing processes."
        ]
      },
      {
        id: 3,
        title: "Digitalization Consultant – Local Government",
        organization: "USAID / Somos Ciudad",
        location: "Guatemala",
        period: "2024",
        description: [
          "Developed digital governance strategies and interoperability frameworks for over 20 municipalities.",
          "Supported capacity building efforts to improve data-driven decision making at local level."
        ]
      },
      {
        id: 4,
        title: "Executive Director & Co-founder",
        organization: "Red Ciudadana",
        location: "Central America",
        period: "2011 – Present",
        description: [
          "Led over 60 projects promoting open government, civic technology and anti-corruption, impacting over 5 million citizens.",
          "Managed over $1.5M in funding, applied RBM practices and oversaw monitoring and evaluation systems.",
          "Implemented AI tools for justice monitoring and policy forecasting; advised SEGEPLAN, MINFIN, MINECO.",
          "Fostered public-private partnerships with Fundesa, Agexport and Guatemala No Se Detiene."
        ]
      },
      {
        id: 5,
        title: "Advocacy Officer & Open Contracting Consultant",
        organization: "HIVOS",
        location: "Central America and Bolivia",
        period: "2016 – 2020",
        description: [
          "Promoted adoption of Open Contracting best practices and Data Standard (OCDS) in 4 countries.",
          "Developed training programs for civil society and investigative journalism on contracting data."
        ]
      }
    ]
  };

  const [experiences, setExperiences] = useState<Experience[]>(experiencesData[language]);

  React.useEffect(() => {
    setExperiences(experiencesData[language]);
  }, [language]);

  const toggleExpand = (id: number) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, expanded: !exp.expanded } : exp
    ));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('experience.title')}</h2>
        <div className="w-20 h-1 bg-green mx-auto"></div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-green rounded-full border-4 border-white z-10"></div>
              
              {/* Content box */}
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-12 md:pr-12 md:text-right' : 'md:ml-12 md:pl-12'
              } md:w-1/2`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <button 
                      onClick={() => toggleExpand(exp.id)}
                      className="text-gray-500 hover:text-primary"
                      aria-label={exp.expanded ? "Collapse details" : "Expand details"}
                    >
                      {exp.expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  <p className="text-lg font-medium">{exp.organization}</p>
                  <div className="flex flex-col sm:flex-row sm:gap-4 text-gray-600 my-2">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                  
                  {exp.expanded && (
                    <div className="mt-4 space-y-2 text-gray-700">
                      {exp.description.map((item, i) => (
                        <p key={i} className="text-sm leading-relaxed">{item}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;