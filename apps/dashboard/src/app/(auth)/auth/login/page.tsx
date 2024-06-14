import { Login } from "@/components/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
};

export default function Page() {
  return <Login />;
}
