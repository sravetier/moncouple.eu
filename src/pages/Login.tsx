import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Lock } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      // Simulation d'authentification
      if (data.email === 'admin@moncouple.fr' && data.password === 'admin123') {
        const mockUser = {
          id: '1',
          email: data.email,
          name: 'Administrateur',
          role: 'admin' as const,
        };
        const mockToken = 'mock-jwt-token';

        login(mockUser, mockToken);
        navigate('/admin');
      } else {
        setError('Email ou mot de passe incorrect');
      }
    } catch (error) {
      setError('Une erreur est survenue lors de la connexion');
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-[#85C196] p-3">
              <Lock className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
            Connexion Administration
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#85C196] focus:border-[#85C196]"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                {...register('password')}
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#85C196] focus:border-[#85C196]"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#85C196] hover:bg-[#75b086] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#85C196]"
              >
                {isSubmitting ? 'Connexion...' : 'Se connecter'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}