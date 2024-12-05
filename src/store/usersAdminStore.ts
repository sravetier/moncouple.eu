import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, UserRole, UserStatus } from '../types/user';

interface UsersState {
  users: User[];
  addUser: (user: Omit<User, 'id' | 'registeredAt'>) => void;
  updateUser: (user: User) => void;
  deleteUser: (userId: string) => void;
  updateUserStatus: (userId: string, status: UserStatus) => void;
  updateUserRole: (userId: string, role: UserRole) => void;
  getUserByEmail: (email: string) => User | undefined;
  getAllUsers: () => User[];
}

// Initial admin user
const initialUsers: User[] = [{
  id: 'admin-1',
  email: 'admin@moncouple.fr',
  name: 'Administrateur',
  role: 'admin',
  status: 'active',
  registeredAt: new Date().toISOString(),
  lastLogin: new Date().toISOString(),
  password: 'admin123' // In a real app, this would be hashed
}];

export const useUsersAdminStore = create<UsersState>()(
  persist(
    (set, get) => ({
      users: initialUsers,
      addUser: (userData) => {
        const newUser: User = {
          id: `user-${Date.now()}`,
          registeredAt: new Date().toISOString(),
          ...userData
        };
        set((state) => ({
          users: [...state.users, newUser]
        }));
      },
      updateUser: (updatedUser) => set((state) => ({
        users: state.users.map((user) => 
          user.id === updatedUser.id ? updatedUser : user
        )
      })),
      deleteUser: (userId) => set((state) => ({
        users: state.users.filter((user) => user.id !== userId)
      })),
      updateUserStatus: (userId, status) => set((state) => ({
        users: state.users.map((user) =>
          user.id === userId ? { ...user, status } : user
        )
      })),
      updateUserRole: (userId, role) => set((state) => ({
        users: state.users.map((user) =>
          user.id === userId ? { ...user, role } : user
        )
      })),
      getUserByEmail: (email) => get().users.find(user => user.email === email),
      getAllUsers: () => get().users
    }),
    {
      name: 'users-admin-storage'
    }
  )
);