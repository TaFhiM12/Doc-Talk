import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="inset-shadow-sm inset-shadow-blue-500 p-6 rounded-2xl">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span>{blog.added_date}</span>
        <span className="mx-2">•</span>
        <span>{blog.reading_time}</span>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-3 text-shadow-lg">
        {blog.question}
      </h2>

      <p className="text-gray-600">{blog.answer}</p>
    </div>
  );
};

export default Blog;
