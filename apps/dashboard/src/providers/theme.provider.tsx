"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = ({
  children,
  ...props
}: Readonly<
  {
    children: React.ReactNode;
  } & ThemeProviderProps
>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
