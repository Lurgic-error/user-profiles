import RouteView from "@/views/RouteView.vue";

export default [
  {
    path: "auth",
    component: RouteView,
    children: [
      // User Login
      {
        path: "login",
        name: "user-login",
        component: () => import("../views/auth/Login.vue"),
      },

      //   User Logout
      {
        path: "logout",
        name: "user-logout",
        component: () => import("../views/auth/Logout.vue"),
      },
      // User Registration
      {
        path: "registration",
        name: "user-registration",
        component: () => import("../views/auth/Registration.vue"),
      },

      // User Forgot Password
      {
        path: "forgot-password",
        name: "user-forgot-password",
        component: () => import("../views/auth/ForgotPassword.vue"),
      },

      // User Change Password
      {
        path: "change-password/:userID",
        name: "user-change-password",
        component: () => import("../views/auth/ChangePassword.vue"),
      },

      // User verify recovery key
      {
        path: "verify-key",
        name: "user-verify-key",
        component: () => import("../views/auth/VerifyKey.vue"),
      },

      // User reset password
      {
        path: "reset-password",
        name: "user-reset-password",
        component: () => import("../views/auth/ResetPassword.vue"),
      },
    ],
  },
];
