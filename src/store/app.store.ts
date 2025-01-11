import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

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
