"use client";

import * as React from "react";
import { useUser } from "@/hooks";
import { Icons } from "../ui/icons";
import { usePathname, useRouter } from "next/navigation";

type HOCProps = {
  children: React.ReactNode;
};

export const AppHOC: React.FC<HOCProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/app");
    }
  }, [isLoading, isAuthenticated, pathname, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Icons.spinner className="animate-spin h-5 w-5" />
      </div>
    );
  } else if (!isAuthenticated && !isLoading) {
    return <>{children}</>;
  } else {
    return null;
  }
};
