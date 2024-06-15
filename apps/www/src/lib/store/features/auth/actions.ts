import { actions as authSliceActions } from "./slice";
import { customFetchBase } from "@/lib/store/api";
import type { LoginPayload, LoginAPIResponse } from "./types";
import { toast } from "sonner";
import { createApi } from "@reduxjs/toolkit/query/react";
import { setRefreshToken } from "@/lib/utils";

export const api = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  tagTypes: ["user"],
  endpoints: (build) => ({
    login: build.mutation<LoginAPIResponse, LoginPayload>({
      query: (body: LoginPayload) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      onQueryStarted: async (_args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (!data) return;
          dispatch(
            authSliceActions.addUser({
              user: data.body.user,
            })
          );
          dispatch(
            authSliceActions.addAccessToken({
              accessToken: data.body.accessToken,
            })
          );
          setRefreshToken(data.body.refreshToken);
          toast.success("Welcome back!");
        } catch (error: any) {
          toast.error(error.error.data.message);
        }
      },
    }),
    signup: build.mutation({
      query: (body: LoginPayload) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
      onQueryStarted: async (_args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (!data) return;
          dispatch(
            authSliceActions.addUser({
              user: data.body.user,
            })
          );
          dispatch(
            authSliceActions.addAccessToken({
              accessToken: data.body.accessToken,
            })
          );
          setRefreshToken(data.body.refreshToken);
        } catch (error: any) {
          toast.error(error.error.data.message);
        }
      },
    }),
    getMe: build.query({
      query: () => ({
        url: "/users/me",
      }),
      providesTags: ["user"],
      onQueryStarted: async (_args, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        if (!data) return;
        dispatch(
          authSliceActions.addUser({
            user: data.body.user,
          })
        );
      },
    }),
  }),
});

export const middleware = api.middleware;
export const actions = { ...api, ...authSliceActions };
