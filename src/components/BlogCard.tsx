import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

interface Props {
  post: BlogPost;
}

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-amber-600 text-sm mb-2">{post.date}</p>
        <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline"
        >
          Read Article
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;