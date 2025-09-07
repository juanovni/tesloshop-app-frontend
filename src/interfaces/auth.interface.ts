import type { User } from "./user.inerface";

export interface AuthResponse {
  user: User;
  token: string;
}
