import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  currentImage?: string;
  onImageSelect: (imageUrl: string) => void;
}

export default function ImageUploader({ currentImage, onImageSelect }: ImageUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string>(currentImage || '');
  const [error, setError] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError('');

    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Le fichier doit être une image');
        return;
      }

      if (file.size > 5 * 1024 * 1024) { // 5MB
        setError('L\'image ne doit pas dépasser 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewUrl(imageUrl);
        onImageSelect(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewUrl('');
    onImageSelect('');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">Image</label>
        {previewUrl && (
          <button
            onClick={handleRemoveImage}
            className="text-red-500 hover:text-red-700 text-sm flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Supprimer
          </button>
        )}
      </div>

      {previewUrl ? (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#85C196] transition-colors">
          <div className="flex flex-col items-center">
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500 mb-2">
              Glissez-déposez une image ici ou
            </p>
            <label className="cursor-pointer text-[#85C196] hover:text-[#75b086]">
              <span>Parcourir</span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
      )}

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <p className="text-xs text-gray-500">
        Format accepté : JPG, PNG, GIF. Taille maximale : 5MB
      </p>
    </div>
  );
}