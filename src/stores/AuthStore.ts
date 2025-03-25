import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../TypesGlobals/User.type';

interface AuthStore {
  user: User | null;
  setUser: (newUser: User) => void;
  clearUser: () => void;
  setStaticUser: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,

      setUser: (newUser: User) => set({ user: { ...newUser } }),

      clearUser: () => {
        set({ user: null })
        localStorage.removeItem('userSession');
      },

      setStaticUser: () => set({
        user: {
          id: 1,
          nombre: 'Mauro',
          apellido: 'Lezcano',
          email: 'maurolezcano111@gmail.com',
          nombre_usuario: 'Maurolezcano81',
          contrasena: 'mauroAdmin',
          created_at: "01/01/2025 12:00",
          updated_at: "01/01/2025 12:00"
        }
      })
    }),
    { name: 'userSession' }
  )
);
