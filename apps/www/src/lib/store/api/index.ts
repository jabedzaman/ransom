import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { authActions } from "@/lib/store/features/auth";
import { RootState } from "@/lib/store";
import { API_URL } from "@/constants";
import { getRefreshToken, removeRefreshToken } from "@/lib/utils";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      const refresh_token = getRefreshToken();
      try {
        const refreshResult = (await baseQuery(
          {
            url: "auth/refresh",
            headers: {
              authorization: `Bearer ${refresh_token}`,
            },
          },
          api,
          extraOptions
        )) as { data: { body: { accessToken: string } } };
        if (refreshResult.data) {
          api.dispatch(
            authActions.addAccessToken({
              accessToken: refreshResult.data.body.accessToken,
            })
          );
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(authActions.removeUser());
          removeRefreshToken();
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
