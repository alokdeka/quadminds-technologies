import matter from 'gray-matter';

// Vite reads all .md files as raw strings at build time.
// Any new file dropped in src/content/blogs/ is picked up automatically on rebuild.
const rawFiles = import.meta.glob('../content/blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function parseFile(path, raw) {
  const { data, content } = matter(raw);
  return {
    slug:     data.slug     || path.split('/').pop().replace('.md', '').replace(/_/g, '-'),
    title:    data.title    || 'Untitled',
    date:     data.date     || '',
    author:   data.author   || 'Quadminds Technologies',
    excerpt:  data.excerpt  || '',
    tags:     data.tags     || [],
    cover:    data.cover    || null,
    readTime: data.readTime || '5 min read',
    content,
  };
}

export function getAllPosts() {
  return Object.entries(rawFiles)
    .filter(([path]) => !path.includes('README'))
    .map(([path, raw]) => parseFile(path, raw))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getAllPosts().find(p => p.slug === slug) || null;
}

export function getLatestPosts(n = 3) {
  return getAllPosts().slice(0, n);
}
