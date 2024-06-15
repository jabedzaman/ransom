import { cn } from "@/lib/utils";
import "./globals.css";
import { soraSans } from "@/lib/fonts";
import { CommonProvider } from "@/providers";
import { Toaster } from "sonner";
export { metadata } from "@/config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          soraSans.variable
        )}
      >
        <CommonProvider>{children}</CommonProvider>
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
