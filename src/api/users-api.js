export default function({ http }) {
  const END_POINT = "/users";
  return Object.freeze({
    getUserList: async () => {
      const { data } = await http.get(`${END_POINT}/`);
      return data;
    },

    getUser: async (userID) => {
      const { data } = await http.get(`${END_POINT}/${userID}`);
      return data;
    },

    search: async (query) => {
      const { data } = await http.post(`${END_POINT}/search-users`, {
        ...query,
      });
      return data;
    },

    updateUser: async (userID, user) => {
      const { data } = await http.put(`${END_POINT}/update-user/${userID}`, {
        ...user,
      });
      return data;
    },

    deleteUser: async (userID, user) => {
      const { data } = await http.put(`${END_POINT}/delete-user/${userID}`, {
        ...user,
      });
      return data;
    },
  });
}
