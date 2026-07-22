// import axios from "axios";

// const BASE_DOMAIN = "localhost:3000";

// export const api = axios.create({
//   baseURL: "http://localhost:5100",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });

// api.interceptors.response.use(
//   (response) => {
//     if (
//       response.config.url?.includes("/loginEmployee") && response.data?.data?.redirect_url
//     ) {
//       const subdomain = response.data.data.redirect_url;

//       const redirectUrl = `http://${subdomain}.${BASE_DOMAIN}/add-employee`;

//       window.location.href = redirectUrl;
//     }

//     return response;
//   },
//   (error) => Promise.reject(error)
// );


import axios from "axios";

const BASE_DOMAIN = "localhost:3000";

export const api = axios.create({
  baseURL: "http://localhost:5100",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;

      let tenant = "";

      // Examples:
      // tet.localhost      -> tet
      // abc.localhost      -> abc
      // company.domain.com -> company
      const parts = hostname.split(".");

      if (parts.length > 1) {
        tenant = parts[0];
      }

      // Don't send localhost as tenant
      if (tenant && tenant !== "localhost") {
        config.headers["x-tenant"] = tenant;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    if (
      response.config.url?.includes("/loginEmployee") &&
      response.data?.data?.redirect_url
    ) {
      const subdomain = response.data.data.redirect_url;

      const redirectUrl = `http://${subdomain}.${BASE_DOMAIN}/add-employee`;

      window.location.href = redirectUrl;
    }

    return response;
  },
  (error) => Promise.reject(error)
);