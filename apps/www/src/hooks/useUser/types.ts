import { User } from "@/types";

export type UseUserType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
};
