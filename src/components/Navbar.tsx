import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Heart, MessageCircle, User, BookOpen } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      if (user?.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/profile');
      }
    } else {
      navigate('/login');
    }
    setIsOpen(false); // Fermer le menu après la navigation
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-[#85C196]" />
              <span className="ml-2 text-xl font-semibold text-gray-800">MonCouple</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link to="/assessment" className="text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Faire le point
            </Link>
            <Link to="/rebuild" className="text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Se reconstruire
            </Link>
            <Link to="/save-relationship" className="text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Sauver son couple
            </Link>
            <Link to="/separation" className="text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Préparer sa séparation
            </Link>
            <Link to="/library-articles" className="text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium flex items-center">
              Articles
            </Link>
            <Link to="/library" className="text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              Bibliothèque
            </Link>
            <Link to="/forum" className="text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Forum
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleAuthClick}
              className="flex items-center space-x-1 text-gray-600 hover:text-[#85C196]"
            >
              <User className="h-6 w-6" />
              <span className="text-sm font-medium">
                {isAuthenticated ? (user?.name || 'Mon compte') : 'Connexion'}
              </span>
            </button>
            <button onClick={toggleMenu} className="sm:hidden text-gray-600 hover:text-[#85C196] focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/assessment" onClick={closeMenu} className="block text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Faire le point
            </Link>
            <Link to="/separation" onClick={closeMenu} className="block text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Préparer sa séparation
            </Link>
            <Link to="/rebuild" onClick={closeMenu} className="block text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Se reconstruire
            </Link>
            <Link to="/save-relationship" onClick={closeMenu} className="block text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Sauver son couple
            </Link>
            <Link to="/library-articles" onClick={closeMenu} className="block text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              Articles
            </Link>
            <Link to="/library" onClick={closeMenu} className="block text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              Bibliothèque
            </Link>
            <Link to="/forum" onClick={closeMenu} className="block text-gray-700 hover:text-[#85C196] px-3 py-2 text-sm font-medium">
              Forum
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
