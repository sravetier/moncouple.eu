import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: "Surmonter une crise de couple",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
   // link: "/library-articles"
  },
  {
    title: "Comment gérer les conflits financiers dans son couple",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=500",
    //link: "/library-articles"
  },
  {
    title: "Reconstruire la confiance après une infidélité",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=800&h=500",
    //link: "/library-articles"
  }
];

export default function PopularArticles() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Articles les plus lus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.link}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="object-cover w-full h-48 transform group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#85C196] transition-colors">
                    {article.title}
                  </h3>
                  {/* Commenting out the "Accéder à nos articles" section */}
                  {/*
                  <div className="mt-2 flex items-center text-[#85C196] opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-sm">Accéder à nos articles</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                  */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}