import { createRouter, createWebHistory } from "vue-router";
import RouteView from "@/views/RouteView.vue";
import UserRoutes from "./user.routes";
import AuthRoutes from "./auth.routes";

const routes = [
  {
    path: "/",
    component: RouteView,
    children: [
      // Authentication Routes
      ...AuthRoutes,

      // Intro
      {
        path: "",
        name: "intro",
        component: () => import("../views/Intro.vue"),
      },

      {
        path: "app",
        component: RouteView,
        children: [
          {
            path: "",
            name: "base-app-view",
            component: () => import("../views/BaseAppView.vue"),
            children: [
              // User Routes
              ...UserRoutes,

              // Page 404
              {
                path: "404",
                name: "404",
                component: () => import("../views/404.vue"),
              },

              // Not found
              {
                path: "not-found",
                name: "not-found",
                component: () => import("../views/NotFound.vue"),
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
