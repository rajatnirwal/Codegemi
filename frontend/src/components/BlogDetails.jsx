import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogs"; // ✅ same data use karo
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === parseInt(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg mb-6"
        />

        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

        {/* Blog Content with Markdown + Custom Tailwind Styling */}
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-4xl font-bold my-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-3xl font-semibold my-3" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-2xl font-semibold my-2" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="mb-4 text-gray-700" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="ml-6 list-disc mb-2 text-gray-700" {...props} />
            ),
          }}
        >
          {blog.content}
        </ReactMarkdown>

        {/* Blog Meta Info */}
        <p className="text-gray-600 mt-6">
          {blog.date} | {blog.tag}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
