import axios from "axios";
import type { App } from "vue";
import router from "./routes";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL ?? "http://localhost:5130",
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      try {
        const refreshToken = localStorage.getItem("refresh_token");
        const response = await apiClient.post("/api/Auth/refresh", { refresh_token: refreshToken });
        const { access_token, refresh_token } = response.data;

        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);

        const config = error?.config;
        config.headers.Authorization = `Bearer ${access_token}`;

        return apiClient(config);
      } catch (err) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        await router.push("/login");
        return Promise.reject(err);
      }
    }
  },
);

export const AxiosPlugin = {
  install: (app: App) => {
    app.config.globalProperties.$apiClient = apiClient;
  },
};

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios: typeof apiClient;
  }
}
