import type { Metadata } from "next";
import "./globals.css";
import KeycloakProvider from "./providers/KeycloakProvider";

export const metadata: Metadata = {
  title: "Agile Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <KeycloakProvider>
          {children} 
        </KeycloakProvider>
      </body>
    </html>
  );
}
