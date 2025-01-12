import create from 'zustand';
import { AuthState } from '../types/AuthTypes';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem('authToken'),
  token: localStorage.getItem('authToken'),
  login: (token) => {
    localStorage.setItem('authToken', token);
    set({ isAuthenticated: true, token });
  },
  logout: () => {
    localStorage.removeItem('authToken');
    set({ isAuthenticated: false, token: null });
  },
}));
