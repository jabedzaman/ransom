import * as React from "react";
import { ThemeProvider } from "./theme.provider";
import { StoreProvider } from "./store.provider";

type ProviderProps = {
  children: React.ReactNode;
};
export const CommonProvider = ({ children }: ProviderProps) => {
  return (
    <StoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
      >
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
};
