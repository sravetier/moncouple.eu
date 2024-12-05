import React, { useState, useEffect } from 'react';
import { Save, Check } from 'lucide-react';
import { ScoreRange } from '../types/test';

interface ScoreRangeEditorProps {
  scoreRanges: ScoreRange[];
  onUpdate: (scoreRanges: ScoreRange[]) => void;
  onClose: () => void;
}

const defaultScoreRanges: ScoreRange[] = [
  {
    id: 'range-1',
    minScore: 0,
    maxScore: 15,
    analysis: ''
  },
  {
    id: 'range-2',
    minScore: 16,
    maxScore: 25,
    analysis: ''
  },
  {
    id: 'range-3',
    minScore: 26,
    maxScore: 35,
    analysis: ''
  },
  {
    id: 'range-4',
    minScore: 36,
    maxScore: 100,
    analysis: ''
  }
];

export default function ScoreRangeEditor({ scoreRanges, onUpdate, onClose }: ScoreRangeEditorProps) {
  const [localRanges, setLocalRanges] = useState<ScoreRange[]>(scoreRanges.length ? scoreRanges : defaultScoreRanges);
  const [error, setError] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (!scoreRanges.length) {
      setLocalRanges(defaultScoreRanges);
    }
  }, [scoreRanges]);

  const updateScoreRange = (index: number, field: keyof ScoreRange, value: string | number) => {
    const updatedRanges = [...localRanges];
    updatedRanges[index] = {
      ...updatedRanges[index],
      [field]: value
    };
    setLocalRanges(updatedRanges);
  };

  const handleSave = () => {
    // Vérifier que toutes les analyses sont remplies
    if (localRanges.some(range => !range.analysis.trim())) {
      setError('Veuillez remplir toutes les analyses');
      return;
    }

    // Vérifier que les plages se suivent correctement
    for (let i = 0; i < localRanges.length - 1; i++) {
      if (localRanges[i].maxScore + 1 !== localRanges[i + 1].minScore) {
        setError('Les plages de scores doivent se suivre sans chevauchement ni écart');
        return;
      }
    }

    setError('');
    onUpdate(localRanges);
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    onClose();
  };

  return (
    <div className="space-y-6">
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 rounded-full p-2">
                <Check className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-center mb-4">
              Les résultats ont été enregistrés avec succès
            </h3>
            <button
              onClick={handleConfirmationClose}
              className="w-full bg-[#85C196] text-white rounded-md py-2 hover:bg-[#75b086]"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Plages de scores et analyses</h3>
        <button
          onClick={handleSave}
          className="flex items-center px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086]"
        >
          <Save className="h-5 w-5 mr-2" />
          Enregistrer les résultats
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="space-y-6">
        {localRanges.map((range, index) => (
          <div key={range.id} className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">
                Plage {index + 1}: {range.minScore} à {range.maxScore} points
              </h4>
              <p className="text-sm text-gray-500">
                {index === 0 && "Score faible"}
                {index === 1 && "Score moyen"}
                {index === 2 && "Bon score"}
                {index === 3 && "Excellent score"}
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Analyse détaillée pour cette plage
              </label>
              <textarea
                value={range.analysis}
                onChange={(e) => updateScoreRange(index, 'analysis', e.target.value)}
                className="w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#85C196] focus:border-[#85C196]"
                rows={4}
                placeholder="Décrivez l'analyse correspondant à cette plage de scores..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}