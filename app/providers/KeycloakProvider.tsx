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
        onLoad: "check-sso", 
        checkLoginIframe: true, // ✅ enable SSO session sync
      }}
    >
      {children}
    </ReactKeycloakProvider>
  );
}
