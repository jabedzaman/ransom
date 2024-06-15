"use client";

import * as React from "react";
import Link from "next/link";
import { appConfig } from "@/config";
import { useUser } from "@/hooks";

export const Header: React.FC = () => {
  const { isAuthenticated, user } = useUser();
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">{appConfig.app.name}</Link>
      <nav>
        {isAuthenticated ? (
          <p>{user?.email}</p>
        ) : (
          <Link href="/auth/login">Login</Link>
        )}
      </nav>
    </header>
  );
};
