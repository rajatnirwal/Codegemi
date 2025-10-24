import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../components/blogs";
// ✅ same array
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const BlogGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <Navbar />
      <section
        className="w-full min-h-screen rounded-2xl shadow-2xl py-16"
        style={{
          background:
            "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-white">
            Latest Blogs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ y: -5 }}
                className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer"
                onHoverStart={() => setHoveredCard(blog.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {blog.date} | {blog.category}
                  </p>
                  <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="mt-3 inline-block text-indigo-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogGrid;
