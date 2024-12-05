export type UserRole = 'user' | 'moderator' | 'admin';
export type UserStatus = 'active' | 'suspended' | 'banned';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  registeredAt: string;
  lastLogin: string;
  password?: string; // Only used during creation/update
}

export interface UserCredentials {
  email: string;
  password: string;
}