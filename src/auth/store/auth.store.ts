import { create } from "zustand";
import type { User } from "@/interfaces/user.inerface";
import { loginAction } from "../actions/login.action";

type AuthStatus = "authenticated" | "not-authenticated" | "checking"; // Mejor logica para saber el estado inicial del usuario

type AuthStore = {
  //
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;
  // Getters

  // Actions
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  token: null,
  authStatus: "checking", // Un estado inicial 

  login: async (email: string, password: string) => {
    console.log({ email, password });
    try {
      const data = await loginAction(email, password);
      localStorage.setItem("token", data.token);
      set({ user: data.user, token: data.token });

      return true;
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");

      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: undefined, token: undefined });
  },
}));
