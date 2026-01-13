import './BlogCard.css';

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <img src={post.thumbnail} alt={post.title} className="blog-thumbnail" />
      <div className="blog-meta">
        <span className="blog-date">{new Date(post.date).toLocaleDateString('ko-KR')}</span>
        <span className="blog-author">by {post.author}</span>
      </div>
      <h2>{post.title}</h2>
      <p className="blog-excerpt">{post.excerpt}</p>
      <div className="blog-tags">
        {post.tags.map((tag, idx) => (
          <span key={idx} className="blog-tag">{tag}</span>
        ))}
      </div>
      <a href={`#blog/${post.slug}`} className="read-more">자세히 읽기 →</a>
    </article>
  );
}
