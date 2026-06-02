import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../utils/parseBlog';
import SEO from './SEO';
import '../styles/Blog.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={`${post.title} | Quadminds Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      
      <article className="blog-post-page">
        {post.cover ? (
          <div className="blog-post-hero">
            <img src={post.cover} alt={post.title} className="blog-post-hero-img" />
          </div>
        ) : (
          <div className="blog-post-hero-placeholder">✍️</div>
        )}

        <div className="blog-post-header">
          <button onClick={() => navigate('/blog')} className="blog-post-back">
            ← Back to Blog
          </button>
          
          <div className="blog-post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>

          <h1 className="blog-post-title">{post.title}</h1>
          
          <div className="blog-post-meta">
            <div className="blog-post-author">
              <div className="blog-post-author-avatar">
                {post.author.charAt(0).toUpperCase()}
              </div>
              <span className="blog-post-author-name">{post.author}</span>
            </div>
            <div className="blog-post-meta-sep" />
            <span className="blog-post-date">{formatDate(post.date)}</span>
            <div className="blog-post-meta-sep" />
            <span className="blog-post-readtime">{post.readTime}</span>
          </div>
        </div>

        <div className="blog-prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
}
