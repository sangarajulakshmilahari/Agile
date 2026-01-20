import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://3.108.139.110",   // 🔁 change for prod
  realm: "Adroitent",                // 🔁 your realm
  clientId: "intraapps",     // 🔁 your client
});

export default keycloak;

