import axios from "axios";

const ROOT_HOST_SEGMENTS = 2;

function getRootHost(hostname: string) {
  const hostSegments = hostname.split(".");

  if (hostSegments.length <= ROOT_HOST_SEGMENTS) {
    return hostname;
  }

  return hostSegments.slice(-ROOT_HOST_SEGMENTS).join(".");
}

export const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    if (
      response.config.url?.includes("/loginEmployee") &&
      response.data?.data?.redirect_url &&
      typeof window !== "undefined"
    ) {
      const subdomain = response.data.data.redirect_url;
      const { protocol, hostname, port } = window.location;
      const rootHost = getRootHost(hostname);
      const portSuffix = port ? `:${port}` : "";
      const redirectUrl = `${protocol}//${subdomain}.${rootHost}${portSuffix}/add-employee`;

      window.location.href = redirectUrl;
    }

    return response;
  },
  (error) => Promise.reject(error)
);
