import * as React from "react";
import { ThemeProvider } from "./theme.provider";

type ProviderProps = {
  children: React.ReactNode;
};
export const CommonProvider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
};
