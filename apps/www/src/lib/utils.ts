import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { setCookie, getCookie } from "cookies-next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setRefreshToken = (token: string) => {
  setCookie("refresh_token", token, {
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
};

export const getRefreshToken = () => {
  return getCookie("refresh_token");
};

export const removeRefreshToken = () => {
  setCookie("refresh_token", "", {
    maxAge: -1,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
};
