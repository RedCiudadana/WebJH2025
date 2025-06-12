import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';
import NewsletterPopup from '../components/NewsletterPopup';

const Home: React.FC = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="profile" className="py-20">
        <About />
      </section>
      <section id="experience" className="py-20 bg-gray-50">
        <Experience />
      </section>
      <section id="projects" className="py-20">
        <Projects />
      </section>
      <section id="publications" className="py-20 bg-gray-50">
        <Publications />
      </section>
      <section id="blog" className="py-20">
        <BlogPreview />
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>
      <NewsletterPopup />
    </main>
  );
};

export default Home;