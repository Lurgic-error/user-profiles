export default function({ http }) {
  const END_POINT = "/auth";
  return Object.freeze({
    register: async (user) => {
      const { data } = await http.post(`${END_POINT}/register`, { ...user });
      return data;
    },

    login: async (user) => {
      const { data } = await http.post(`${END_POINT}/login`, { ...user });
      return data;
    },

    logout: async (user) => {
      const { data } = await http.post(`${END_POINT}/logout`);
      return data;
    },

    changePassword: async (user) => {
      const { data } = await http.post(`${END_POINT}/change-password`);
      return data;
    },

    forgotPassword: async (user) => {
      const { data } = await http.post(`${END_POINT}/forgot-password`);
      return data;
    },

    savePassword: async () => {
      const { data } = await http.put(`${END_POINT}/save-password`);
      return data;
    },

    validateRecoveryKey: async () => {
      const { data } = await http.post(`${END_POINT}/validate-key`);
      return data;
    },
  });
}
