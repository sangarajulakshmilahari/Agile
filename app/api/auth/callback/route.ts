import keycloak from "../../lib/keycloak";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("No authorization code", { status: 400 });
  }

  const kc = keycloak();

  const tokenResponse = await fetch(kc.tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: process.env.KEYCLOAK_CLIENT_ID!,
      client_secret: process.env.KEYCLOAK_CLIENT_SECRET!,
      redirect_uri: process.env.KEYCLOAK_REDIRECT_URL!,
      code,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok) {
    console.error("Token error:", tokenData);
    return new Response("Token exchange failed", { status: 401 });
  }

  // 🔑 Decode token to get username
  const decoded: any = jwt.decode(tokenData.access_token);

  const username =
    decoded?.preferred_username ||
    decoded?.email ||
    decoded?.name ||
    "User";

  const cookieStore = cookies();

  // Existing access token cookie
  cookieStore.set("access_token", tokenData.access_token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
  });

  // ✅ NEW: username cookie (readable by frontend)
  cookieStore.set("username", username, {
    httpOnly: false,
    path: "/",
    sameSite: "lax",
  });

  return Response.redirect(new URL("/webpage", req.url));
}
