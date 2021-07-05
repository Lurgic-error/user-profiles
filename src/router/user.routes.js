import RouteView from "@/views/RouteView.vue";

export default [
  {
    path: "users",
    component: RouteView,
    children: [
      // User List
      {
        path: "",
        name: "users",
        component: () => import("../views/users/UserListView.vue"),
      },

      // User Profile
      {
        path: ":userID",
        name: "user-profile",
        component: () => import("../views/users/UserProfile.vue"),
      },

      // Update user profile
      {
        path: "update-user/:userID",
        name: "update-profile",
        component: () => import("../views/users/EditProfile.vue"),
      },

      // Delete user profile
      {
        path: "delete-user/:userID",
        name: "delete-profile",
        component: () => import("../views/users/DeleteProfile.vue"),
      },

      // User Settings
      {
        path: "user-settings",
        name: "user-settings",
        component: () => import("../views/users/UserSettings.vue"),
      },
    ],
  },
];
