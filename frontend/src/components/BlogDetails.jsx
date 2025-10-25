import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./Blogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";

// Premium CSS styles for BlogDetails
const blogDetailsStyles = `
  .blog-details-premium {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    min-height: 100vh;
  }

  .blog-details-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .blog-details-content {
    background: white;
    border-radius: 24px;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .blog-details-hero {
    position: relative;
    height: 500px;
    overflow: hidden;
  }

  .blog-details-hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .blog-details-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(30, 41, 59, 0.6), transparent);
  }

  .blog-details-header {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 3rem;
    color: white;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  }

  .blog-details-badge {
    display: inline-flex;
    align-items: center;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    backdrop-filter: blur(10px);
  }

  .blog-details-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .blog-details-meta {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1rem;
    opacity: 0.9;
  }

  .blog-details-date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .blog-details-body {
    padding: 4rem;
  }

  /* Markdown Styling */
  .markdown-content {
    line-height: 1.8;
    color: #374151;
  }

  .markdown-content h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin: 3rem 0 1.5rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #3b82f6;
    letter-spacing: -0.02em;
  }

  .markdown-content h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #1e293b;
    margin: 2.5rem 0 1rem 0;
    position: relative;
    padding-left: 1rem;
  }

  .markdown-content h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 4px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
  }

  .markdown-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    margin: 2rem 0 1rem 0;
  }

  .markdown-content p {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    color: #4b5563;
  }

  .markdown-content ul, .markdown-content ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }

  .markdown-content li {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
    color: #4b5563;
    line-height: 1.6;
  }

  .markdown-content ul li {
    position: relative;
    list-style: none;
    padding-left: 1.5rem;
  }

  .markdown-content ul li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #3b82f6;
    font-weight: bold;
  }

  .markdown-content strong {
    font-weight: 600;
    color: #1e293b;
  }

  .markdown-content em {
    font-style: italic;
    color: #6b7280;
  }

  .markdown-content blockquote {
    border-left: 4px solid #3b82f6;
    padding: 1.5rem 2rem;
    margin: 2rem 0;
    background: linear-gradient(135deg, #eff6ff, #f8fafc);
    border-radius: 0 12px 12px 0;
    font-style: italic;
  }

  .markdown-content blockquote p {
    margin: 0;
    color: #475569;
    font-size: 1.25rem;
  }

  /* Navigation */
  .blog-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    border-top: 1px solid #e5e7eb;
    background: #f8fafc;
  }

  .nav-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    background: white;
    color: #374151;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    color: #3b82f6;
  }

  /* Related Articles */
  .related-articles {
    margin-top: 4rem;
    padding-top: 3rem;
    border-top: 1px solid #e5e7eb;
  }

  .related-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 2rem;
    text-align: center;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .related-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
  }

  .related-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  .related-card-image {
    height: 160px;
    overflow: hidden;
  }

  .related-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .related-card:hover .related-card-image img {
    transform: scale(1.1);
  }

  .related-card-content {
    padding: 1.5rem;
  }

  .related-card-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .related-card-date {
    font-size: 0.875rem;
    color: #64748b;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .blog-details-container {
      padding: 1rem;
    }

    .blog-details-hero {
      height: 300px;
    }

    .blog-details-header {
      padding: 1.5rem;
    }

    .blog-details-title {
      font-size: 2rem;
    }

    .blog-details-body {
      padding: 2rem;
    }

    .markdown-content h1 {
      font-size: 2rem;
    }

    .markdown-content h2 {
      font-size: 1.5rem;
    }

    .markdown-content h3 {
      font-size: 1.25rem;
    }

    .blog-navigation {
      padding: 1.5rem 2rem;
      flex-direction: column;
      gap: 1rem;
    }

    .nav-button {
      width: 100%;
      justify-content: center;
    }
  }

  /* Animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .blog-details-content {
    animation: fadeInUp 0.6s ease;
  }
`;

// Add styles to document head
const styleSheet = document.createElement("style");
styleSheet.innerText = blogDetailsStyles;
document.head.appendChild(styleSheet);

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === parseInt(id));

  // Get related articles (excluding current blog)
  const relatedArticles = blogPosts
    .filter(b => b.id !== parseInt(id))
    .slice(0, 3);

  // Get next and previous blog IDs for navigation
  const currentIndex = blogPosts.findIndex(b => b.id === parseInt(id));
  const nextBlog = blogPosts[currentIndex + 1];
  const prevBlog = blogPosts[currentIndex - 1];

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="blog-details-premium">
          <div className="blog-details-container">
            <div className="blog-details-content">
              <div className="blog-details-body text-center py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
                <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
                <Link to="/blogs" className="nav-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="blog-details-premium">
        <div className="blog-details-container">
          {/* Main Blog Content - Back to Blogs button removed */}
          <div className="blog-details-content">
            {/* Hero Section with Image */}
            <div className="blog-details-hero">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-details-overlay"></div>
              <div className="blog-details-header">
                <span className="blog-details-badge">{blog.category}</span>
                <h1 className="blog-details-title">{blog.title}</h1>
                <div className="blog-details-meta">
                  <span className="blog-details-date">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {blog.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Body */}
            <div className="blog-details-body">
              <div className="markdown-content">
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => <h1 {...props} />,
                    h2: ({ node, ...props }) => <h2 {...props} />,
                    h3: ({ node, ...props }) => <h3 {...props} />,
                    p: ({ node, ...props }) => <p {...props} />,
                    ul: ({ node, ...props }) => <ul {...props} />,
                    ol: ({ node, ...props }) => <ol {...props} />,
                    li: ({ node, ...props }) => <li {...props} />,
                    strong: ({ node, ...props }) => <strong {...props} />,
                    em: ({ node, ...props }) => <em {...props} />,
                    blockquote: ({ node, ...props }) => <blockquote {...props} />,
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Navigation between blogs */}
            <div className="blog-navigation">
              {prevBlog ? (
                <Link to={`/blog/${prevBlog.id}`} className="nav-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Previous Article
                </Link>
              ) : (
                <div></div> // Empty div for spacing
              )}
              
              {nextBlog ? (
                <Link to={`/blog/${nextBlog.id}`} className="nav-button">
                  Next Article
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              ) : (
                <div></div> // Empty div for spacing
              )}
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="related-articles">
              <h3 className="related-title">You Might Also Like</h3>
              <div className="related-grid">
                {relatedArticles.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blog/${relatedBlog.id}`}
                    className="related-card"
                  >
                    <div className="related-card-image">
                      <img src={relatedBlog.image} alt={relatedBlog.title} />
                    </div>
                    <div className="related-card-content">
                      <h4 className="related-card-title">{relatedBlog.title}</h4>
                      <div className="related-card-date">{relatedBlog.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;