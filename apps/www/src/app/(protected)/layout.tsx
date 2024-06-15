import { ProtectedHOC } from "@/components/auth";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedHOC>{children}</ProtectedHOC>;
}
