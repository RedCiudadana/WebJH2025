import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPreview: React.FC = () => {
  const { t } = useLanguage();
  const previewPosts = blogPosts.slice(0, 6);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('blog.title')}</h2>
        <div className="w-20 h-1 bg-green mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="flex items-center mr-4">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <User size={14} className="mr-1" />
                  {post.author}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.slug}`} 
                className="inline-flex items-center text-green hover:text-orange-700 font-medium"
              >
                {t('blog.readMore')} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-900 transition-colors"
        >
          {t('blog.viewAll')} <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPreview;