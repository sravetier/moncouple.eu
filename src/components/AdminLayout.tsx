import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import {
  LayoutDashboard,
  Users,
  FileText,
  BookOpen,
  MessageSquare,
  Settings,
  LogOut,
} from 'lucide-react';

const navigation = [
  { name: 'Tableau de bord', href: '/admin', icon: LayoutDashboard },
  { name: 'Utilisateurs', href: '/admin/users', icon: Users },
  { name: 'Tests', href: '/admin/tests', icon: FileText },
  { name: 'Guides pratiques', href: '/admin/guides', icon: BookOpen },
  { name: 'Forum', href: '/admin/forum', icon: MessageSquare },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  if (!user || user.role !== 'admin') {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-[#85C196]">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-white text-xl font-bold">MonCouple Admin</span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-[#75b086]"
                >
                  <item.icon className="mr-3 h-6 w-6" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-[#75b086] p-4">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-white">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="ml-auto flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#75b086]"
              >
                <LogOut className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pl-64">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}