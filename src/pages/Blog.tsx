import React from 'react';
import { ArrowLeft, Calendar, Search, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('blog.title')}</h1>
            <p className="text-xl text-gray-200">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Back Button */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <a 
            href="/" 
            className="flex items-center text-primary hover:text-green transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            {t('blog.backToHome')}
          </a>
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder={t('blog.search')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
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
                <a 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-green hover:text-primary font-medium"
                >
                  {t('blog.readMore')} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;