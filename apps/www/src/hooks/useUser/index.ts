import type { UseUserType } from "./types";
import { useAppSelector } from "../useAppSelector";
import { authActions } from "@/lib/store/features";

export const useUser = (): UseUserType => {
  const { isLoading } = authActions.useGetMeQuery(undefined, {
    refetchOnFocus: true,
  });
  const { user } = useAppSelector((state) => state.auth);
  const isAuthenticated = !!user;
  return { user, isLoading, isAuthenticated };
};
