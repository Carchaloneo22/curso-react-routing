export function login() {
  localStorage.setItem("platzi_host_auth", "true");
}

export function logout() {
  localStorage.removeItem("platzi_host_auth");
}

export function isAuthenticated() {
  return localStorage.getItem("platzi_host_auth") === "true";
}
