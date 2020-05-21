export default function isAuthenticated() {
  const resp = localStorage.getItem("token");

  return resp;
}
