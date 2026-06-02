import { Link } from 'react-router-dom';
import { getLatestPosts } from '../utils/parseBlog';
import '../styles/Blog.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function BlogSection() {
  const posts = getLatestPosts(3);
  if (posts.length === 0) return null;

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-tag">Blog</div>
        <h2 className="section-heading centered">
          Thoughts &amp; <span className="gradient-text">Insights</span>
        </h2>
        <p className="section-sub centered">
          Ideas on technology, product building, and the future of software — straight from the Quadminds team.
        </p>

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

        {posts.length > 0 && (
          <div className="blog-view-all">
            <Link to="/blog" className="btn-ghost">View all posts →</Link>
          </div>
        )}
      </div>
    </section>
  );
}
