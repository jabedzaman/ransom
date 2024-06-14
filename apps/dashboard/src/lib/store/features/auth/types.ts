import { User } from "@/types";

export type UserState = {
  user: User | null;
  accessToken: string | null;
};
