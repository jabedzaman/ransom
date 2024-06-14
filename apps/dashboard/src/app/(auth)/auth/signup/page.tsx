import type { Metadata } from "next";
import { SignUp } from "@/components/auth";

export const metadata: Metadata = {
  title: "signup",
};

export default function Page() {
  return <SignUp />;
}
