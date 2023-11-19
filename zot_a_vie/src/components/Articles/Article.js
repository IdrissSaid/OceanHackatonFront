// Article.js
import React from 'react';

const Article = ({ title, description, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-300 hover:border-blue-500 transition duration-300 shadow-md">
      <h2 className="text-xl font-semibold mb-2 ">{title}</h2>
      <p className="text-gray-600 mb-4 text-justify">{description}</p>
      <p className="text-gray-800 text-justify">{content}</p>
    </div>
  );
};

export default Article;
