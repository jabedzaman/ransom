import { User } from "@/types";
import type { ITokenResponse } from "@ransom/types";

export type UserState = {
  user: User | null;
  accessToken: string | null;
};

export type AddUserAction = {
  user: User;
};

export type AddAccessTokenAction = {
  accessToken: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};
export type LoginAPIResponse = {
  body: ITokenResponse & {
    user: User;
  };
};
