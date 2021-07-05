import axios from "axios";
import users from "./users-api";
import auth from "./auth-api";

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const usersAPI = users({ http });

const authAPI = auth({ http });

export { usersAPI, authAPI };
