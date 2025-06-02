import React from 'react';
import BlogCard from './BlogCard';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Seasonal Routines: Ayurvedic Wisdom for Summer',
    excerpt: 'Discover how to stay balanced during the hot Pitta season with these ancient Ayurvedic practices.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
    date: 'June 15, 2023',
    category: 'Seasonal Wellness'
  },
  {
    id: 2,
    title: 'Understanding Your Dosha: A Guide to Vata, Pitta, and Kapha',
    excerpt: 'Learn about the three fundamental energies that govern your physical and mental constitution.',
    image: 'https://images.pexels.com/photos/5241043/pexels-photo-5241043.jpeg',
    date: 'May 22, 2023',
    category: 'Ayurvedic Principles'
  },
  {
    id: 3,
    title: 'Healing Herbs: 5 Ayurvedic Spices for Your Kitchen Pharmacy',
    excerpt: 'Transform your kitchen into a healing space with these powerful Ayurvedic herbs and spices.',
    image: 'https://images.pexels.com/photos/4198714/pexels-photo-4198714.jpeg',
    date: 'April 10, 2023',
    category: 'Nutrition'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-4">Wellness Journal</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Explore our collection of articles on Ayurvedic wisdom, seasonal wellness tips, and holistic living practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Wellness Wisdom
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;