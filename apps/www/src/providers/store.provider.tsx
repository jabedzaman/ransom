"use client";
import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";

type StoreProviderProps = {
  children: React.ReactNode;
};
export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  return <ReduxProvider store={storeRef.current}>{children}</ReduxProvider>;
};
