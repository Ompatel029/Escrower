import React from "react";
import "./Blog2.css";
import { FaSearch } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">

        {/* Header */}
        <div className="blog-header">
          <h2>Blog</h2>
          <FaSearch className="search-icon" />
        </div>

        {/* Featured Blog */}
        <div className="featured-blog">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt=""
          />

          <div className="featured-content">
            <span className="tag">TIPS</span>
            <h3>Top successful AI chatbots tool 2023</h3>
            <p>
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit.
            </p>
            <p className="meta">2 July 2023 · 0 Comments</p>
            <a href="#">Read more →</a>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {[
            "https://images.unsplash.com/photo-1635321593217-40050ad13c74",
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
            "https://images.unsplash.com/photo-1581091012184-5c7c2d00f2d2",
            "https://images.unsplash.com/photo-1674027444485-cec3da58eef4",
            "https://images.unsplash.com/photo-1541532713592-79a0317b6b77",
          ].map((img, i) => (
            <div className="blog-card" key={i}>
              <img src={img} alt="" />

              <div className="blog-content">
                <span className="tag">TIPS</span>
                <h3>AI Innovations & Future Trends</h3>
                <p>2 July 2023 · 0 Comments</p>
                <a href="#">Read more →</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
