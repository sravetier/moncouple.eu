import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface PracticalGuideProps {
  title: string;
  steps: Step[];
}

export default function PracticalGuide({ title, steps }: PracticalGuideProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-10">
              <div className="absolute left-0 top-0 bg-white">
                <CheckCircle className="h-8 w-8 text-[#85C196]" />
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Étape {step.number}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}