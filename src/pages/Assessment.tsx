import React from 'react';
import { ClipboardCheck } from 'lucide-react';
import { tests } from '../data/tests';
import { personalTests } from '../data/personalTests';
import TestCarousel from '../components/TestCarousel';
import { useTestStore } from '../store/testStore';

export default function Assessment() {
  const getResultsByTestId = useTestStore((state) => state.getResultsByTestId);

  const testsWithHistory = tests.map(test => ({
    ...test,
    lastResult: getResultsByTestId(test.id)[0]
  }));

  const personalTestsWithHistory = personalTests.map(test => ({
    ...test,
    lastResult: getResultsByTestId(test.id)[0]
  }));

  return (
    <div className="pt-16">
      <div className="bg-[#85C196] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <ClipboardCheck className="h-16 w-16" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Faire le point sur votre couple</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Découvrez nos outils d'évaluation pour mieux comprendre votre situation et identifier les axes d'amélioration.
          </p>
        </div>
      </div>

      <TestCarousel 
        tests={testsWithHistory} 
        title="Faire le point sur mon couple"
        subtitle="Évaluez différents aspects de votre relation pour mieux comprendre votre dynamique de couple"
      />

      <TestCarousel 
        tests={personalTestsWithHistory}
        title="Faire le point sur moi-même"
        subtitle="Explorez vos besoins, vos attentes et vos objectifs personnels"
      />

    </div>
  );
}