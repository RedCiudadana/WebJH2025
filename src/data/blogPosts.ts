import { marked } from 'marked';
import fm from 'front-matter';
import slugify from 'slugify';
import { BlogPost } from '../types';

const rawPosts = import.meta.glob('../content/blogs/*.md', {
  as: 'raw',
  eager: true,
}) as Record<string, string>;

interface Attributes {
  title: string;
  image: string;
  descripcion: string;
  date: string;
  author: string;
  highlight?: boolean;
}

export const blogPosts: BlogPost[] = Object.values(rawPosts)
  .map((raw, index) => {
    const { attributes, body } = fm<Attributes>(raw);

    return {
      id: index + 1,
      title: attributes.title,
      excerpt: attributes.descripcion,
      content: marked.parse(body),
      date: new Date(attributes.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      author: attributes.author,
      image: attributes.image,
      slug: slugify(attributes.title, { lower: true, strict: true }),
      highlight: attributes.highlight ?? false,
    } satisfies BlogPost;
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
