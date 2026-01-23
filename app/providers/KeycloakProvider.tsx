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
        onLoad: "login-required",
        pkceMethod: "S256",
        checkLoginIframe: false,
        flow: "standard",
      }}
    >
      {children}
    </ReactKeycloakProvider>
  );
}
