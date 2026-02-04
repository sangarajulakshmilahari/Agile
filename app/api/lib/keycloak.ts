const realmBaseUrl = `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}`;

export default function keycloak() {
  return {
    authorizeUrl: `${realmBaseUrl}/protocol/openid-connect/auth`,
    tokenUrl: `${realmBaseUrl}/protocol/openid-connect/token`,
  };
}
console.log("Keycloak realm:", process.env.KEYCLOAK_REALM);
