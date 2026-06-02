import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/parseBlog';
import SEO from './SEO';
import '../styles/Blog.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <SEO 
        title="Blog | Quadminds Technologies" 
        description="Insights, updates, and deep dives from the Quadminds team."
        path="/blog"
      />
      <div className="blog-page">
        <div className="container">
          <div className="blog-page-header">
            <h1 className="section-heading">Our <span className="gradient-text">Blog</span></h1>
            <p className="section-sub centered">
              Thoughts on technology, product development, and scaling digital solutions.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="section-sub centered" style={{ marginTop: '80px' }}>No posts yet. Check back soon!</p>
          ) : (
            <div className="blog-grid">
              {posts.map(post => (
                <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                  {post.cover
                    ? <img src={post.cover} alt={post.title} className="blog-card-cover" loading="lazy" />
                    : <div className="blog-card-cover-placeholder">✍️</div>
                  }
                  <div className="blog-card-body">
                    <div className="blog-card-tags">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <span className="blog-card-date">{formatDate(post.date)}</span>
                      <span className="blog-card-readtime">{post.readTime}</span>
                      <span className="blog-card-link">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
