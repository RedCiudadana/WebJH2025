import React from 'react';
import { ArrowLeft, Calendar, Share2, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">{t('blog.notFound')}</h1>
            <p className="text-gray-600 mb-6">{t('blog.notFoundDesc')}</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary hover:text-green transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              {t('blog.backToBlog')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-white text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center justify-center text-sm space-x-6">
                <span className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <User size={16} className="mr-2" />
                  {post.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/blog" 
              className="flex items-center text-primary hover:text-green transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              {t('blog.backToBlog')}
            </Link>
            <button 
              className="flex items-center text-primary hover:text-green transition-colors"
              onClick={() => {
                navigator.share({
                  title: post.title,
                  text: post.excerpt,
                  url: window.location.href,
                }).catch(console.error);
              }}
            >
              <Share2 size={20} className="mr-2" />
              {t('blog.share')}
            </button>
          </div>

            <article className="bg-white rounded-lg shadow-md p-8">
              <div 
              className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-green hover:prose-a:text-orange-700 [&_p]:mb-2 [&_h2]:my-4 [&_h2]:font-bold [&_ul]:list-disc [&_ul]:ml-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6">{t('blog.relatedArticles')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{relatedPost.title}</h3>
                      <p className="text-gray-600">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;