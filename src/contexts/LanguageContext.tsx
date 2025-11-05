import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.profile': 'Perfil Profesional',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.publications': 'Publicaciones',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title1': 'Digital Governance Expert',
    'hero.desc1': 'Diseñando, implementando y evaluando proyectos en América Latina y el Caribe',
    'hero.title2': 'Consultor Internacional',
    'hero.desc2': 'Especialista en gobernanza digital, anticorrupción e innovación pública',
    'hero.title3': 'Líder en Innovación Pública',
    'hero.desc3': 'Desarrollando capacidades institucionales y promoviendo el gobierno abierto',
    'hero.contact': 'Contactar',
    'hero.learnMore': 'Conocer más',
    
    // About Section
    'about.title': 'Perfil Profesional',
    'about.name': 'Julio Herrera Toledo',
    'about.description1': 'Líder estratégico en gobernanza digital, anticorrupción e innovación pública con más de 12 años de experiencia diseñando, implementando y evaluando proyectos en América Latina y el Caribe. Comprobada trayectoria liderando más de 60 iniciativas alineadas con el ODS 16, aplicando la Gestión Basada en Resultados (GBR), Teoría del Cambio (TdC) y enfoques de desarrollo de capacidades para el fortalecimiento institucional.',
    'about.description2': 'Ha asegurado y gestionado más de $1.5M en financiamiento multilateral (PNUD, BID, USAID, GIZ, UE) y asesorado a ministerios gubernamentales y OSC en gobierno abierto, gobernanza inclusiva, modernización del sector público y transformación digital.',
    'about.experience': '12+ años de experiencia',
    'about.skills.digitalGov': 'Gobernanza Digital',
    'about.skills.openGov': 'Gobierno Abierto',
    'about.skills.anticorruption': 'Anticorrupción',
    'about.skills.publicInnovation': 'Innovación Pública',
    'about.skills.capacityBuilding': 'Desarrollo de Capacidades',
    'about.skills.languages': 'Español e Inglés',
    
    // Experience Section
    'experience.title': 'Experiencia Profesional',
    
    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.viewProject': 'Ver proyecto',
    'projects.filter.all': 'All',
    'projects.filter.investigación': 'Investigación',
    'projects.filter.consultoría': 'Consultoría',
    'projects.filter.estrategia': 'Estrategia',
    'projects.filter.implementación': 'Implementación',
    'projects.filter.publicación': 'Publicación',
    
    // Publications Section
    'publications.title': 'Publicaciones',
    'publications.subtitle': 'Investigación y análisis sobre gobernanza digital, anticorrupción e innovación pública publicados en revistas académicas y organismos internacionales.',
    'publications.viewPublication': 'Ver publicación',
    'publications.collaboration.title': '¿Interesado en colaborar?',
    'publications.collaboration.description': 'Estoy abierto a colaboraciones académicas y de investigación en temas de gobernanza digital, anticorrupción e innovación pública.',
    'publications.collaboration.contact': 'Contactar para colaboraciones',
    'publications.type.article': 'Artículo',
    'publications.type.report': 'Reporte',
    'publications.type.book': 'Libro',
    'publications.type.chapter': 'Capítulo',
    
    // Blog Section
    'blog.title': 'Blog',
    'blog.subtitle': 'Artículos sobre gobernanza digital, anticorrupción e innovación pública',
    'blog.readMore': 'Leer más',
    'blog.viewAll': 'Ver todos los artículos',
    'blog.backToHome': 'Volver al inicio',
    'blog.search': 'Buscar artículos...',
    'blog.backToBlog': 'Volver al blog',
    'blog.share': 'Compartir',
    'blog.relatedArticles': 'Artículos Relacionados',
    'blog.notFound': 'Artículo no encontrado',
    'blog.notFoundDesc': 'Lo sentimos, el artículo que buscas no existe.',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Interesado en trabajar juntos?',
    'contact.description': 'Si está interesado en mis servicios de consultoría en gobernanza digital, anticorrupción o innovación pública, no dude en ponerse en contacto. Estoy disponible para proyectos con organismos internacionales, gobiernos y organizaciones de la sociedad civil.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.success': 'Mensaje enviado correctamente. Gracias por contactar.',
    
    // Footer
    'footer.description': 'Consultor en gobernanza digital, anticorrupción e innovación pública con más de 12 años acompañando proyectos en América Latina y el Caribe.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.rights': 'Todos los derechos reservados.',
    
    // LinkedIn
    'linkedin.title': '¡Conectemos en LinkedIn!',
    'linkedin.description': 'Mantengamos contacto y compartamos ideas sobre gobernanza digital, innovación pública y anticorrupción.',
    'linkedin.connect': 'Conectar en LinkedIn',
    'linkedin.close': 'Cerrar'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.profile': 'Professional Profile',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title1': 'Digital Governance Expert',
    'hero.desc1': 'Designing, implementing and evaluating projects in Latin America and the Caribbean',
    'hero.title2': 'International Consultant',
    'hero.desc2': 'Specialist in digital governance, anti-corruption and public innovation',
    'hero.title3': 'Public Innovation Leader',
    'hero.desc3': 'Developing institutional capacities and promoting open government',
    'hero.contact': 'Contact',
    'hero.learnMore': 'Learn More',
    
    // About Section
    'about.title': 'Professional Profile',
    'about.name': 'Julio Herrera Toledo',
    'about.description1': 'Strategic leader in digital governance, anti-corruption and public innovation with over 12 years of experience designing, implementing and evaluating projects in Latin America and the Caribbean. Proven track record leading over 60 initiatives aligned with SDG 16, applying Results-Based Management (RBM), Theory of Change (ToC) and capacity development approaches for institutional strengthening.',
    'about.description2': 'Has secured and managed over $1.5M in multilateral funding (UNDP, IDB, USAID, GIZ, EU) and advised government ministries and CSOs on open government, inclusive governance, public sector modernization and digital transformation.',
    'about.experience': '12+ years of experience',
    'about.skills.digitalGov': 'Digital Governance',
    'about.skills.openGov': 'Open Government',
    'about.skills.anticorruption': 'Anti-corruption',
    'about.skills.publicInnovation': 'Public Innovation',
    'about.skills.capacityBuilding': 'Capacity Building',
    'about.skills.languages': 'Spanish & English',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.viewProject': 'View project',
    'projects.filter.all': 'All',
    'projects.filter.investigación': 'Research',
    'projects.filter.consultoría': 'Consulting',
    'projects.filter.estrategia': 'Strategy',
    'projects.filter.implementación': 'Implementation',
    'projects.filter.publicación': 'Publication',
    
    // Publications Section
    'publications.title': 'Publications',
    'publications.subtitle': 'Research and analysis on digital governance, anti-corruption and public innovation published in academic journals and international organizations.',
    'publications.viewPublication': 'View publication',
    'publications.collaboration.title': 'Interested in collaborating?',
    'publications.collaboration.description': 'I am open to academic and research collaborations on digital governance, anti-corruption and public innovation topics.',
    'publications.collaboration.contact': 'Contact for collaborations',
    'publications.type.article': 'Article',
    'publications.type.report': 'Report',
    'publications.type.book': 'Book',
    'publications.type.chapter': 'Chapter',
    
    // Blog Section
    'blog.title': 'Blog',
    'blog.subtitle': 'Articles on digital governance, anti-corruption and public innovation',
    'blog.readMore': 'Read more',
    'blog.viewAll': 'View all articles',
    'blog.backToHome': 'Back to home',
    'blog.search': 'Search articles...',
    'blog.backToBlog': 'Back to blog',
    'blog.share': 'Share',
    'blog.relatedArticles': 'Related Articles',
    'blog.notFound': 'Article not found',
    'blog.notFoundDesc': 'Sorry, the article you are looking for does not exist.',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Interested in working together?',
    'contact.description': 'If you are interested in my consulting services in digital governance, anti-corruption or public innovation, please do not hesitate to get in touch. I am available for projects with international organizations, governments and civil society organizations.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Message sent successfully. Thank you for contacting.',
    
    // Footer
    'footer.description': 'Consultant in digital governance, anti-corruption and public innovation with over 12 years supporting projects in Latin America and the Caribbean.',
    'footer.quickLinks': 'Quick Links',
    'footer.rights': 'All rights reserved.',
    
    // LinkedIn
    'linkedin.title': "Let's Connect on LinkedIn!",
    'linkedin.description': "Let's stay in touch and share ideas about digital governance, public innovation and anti-corruption.",
    'linkedin.connect': 'Connect on LinkedIn',
    'linkedin.close': 'Close'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};