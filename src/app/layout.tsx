import { MobileSideBar } from "@/components/MobileSideBar";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SideBar } from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased")}>
              <MobileSideBar/>
              <SideBar/>
        {children}
      </body>
    </html>
  );
}
