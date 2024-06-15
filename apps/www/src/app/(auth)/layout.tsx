import * as React from "react";
import { appConfig } from "@/config";
import Link from "next/link";
import { AuthHOC } from "@/components/auth";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <Link
            href={"/"}
            className="relative z-20 flex items-center text-lg font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            {appConfig.app.name}
          </Link>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">&ldquo;{appConfig.app.tagline}.&rdquo;</p>
              <footer className="text-sm">{appConfig.authors[0].name}</footer>
            </blockquote>
          </div>
        </div>
        <AuthHOC>{children}</AuthHOC>
      </div>
    </>
  );
}
