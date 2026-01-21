"use client";

import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../lib/keycloak";

export default function KeycloakProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        // 🔴 Forces fresh login every time
        onLoad: "login-required",

        // 🔴 Prevents iframe cookie reuse
        checkLoginIframe: false,
      }}
    >
      {children}
    </ReactKeycloakProvider>
  );
}
