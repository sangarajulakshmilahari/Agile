import keycloak from "./keycloak";

export async function apiFetch(
  url: string,
  options: RequestInit = {}
) {
  // Ensure token is fresh
  await keycloak.updateToken(30);

  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${keycloak.token}`,
      "Content-Type": "application/json",
    },
  });
}
