import React from 'react';
import TestCarousel from './TestCarousel';
import ArticleCarousel from './ArticleCarousel';
import PracticalGuide from './PracticalGuide';
import ExternalResources from './ExternalResources';

interface PageTemplateProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tests: any[];
  articles: any[];
  practicalSteps: {
    title: string;
    steps: any[];
  };
  resources: any[];
}

export default function PageTemplate({
  title,
  description,
  icon,
  tests,
  articles,
  practicalSteps,
  resources,
}: PageTemplateProps) {
  return (
    <div className="pt-16">
      <div className="bg-[#85C196] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            {icon}
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>

      <TestCarousel tests={tests} />
      <ArticleCarousel articles={articles} />
      <PracticalGuide title={practicalSteps.title} steps={practicalSteps.steps} />
      <ExternalResources resources={resources} />
    </div>
  );
}