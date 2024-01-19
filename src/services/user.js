import Api from "./api";

const UserServices = {
  register: (params) => Api.post("/users/register", params),
  login: async (params) => {
    let response = await Api.post("/users/login", params)
    localStorage.setItem("user", JSON.stringify(response.data.use))
    localStorage.setItem("token", JSON.stringify(response.data.token))
  },
  logout: () => {
    localStorage.removeItem("user", null)
    localStorage.removeItem("token", null)
  },
  updateEdit: async (params) => {
   let updateUser = await Api.put("/users/edit", params, {
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replaceAll('"', "")}`,
      }
    })
    localStorage.setItem("user", JSON.stringify(updateUser.data))
  },
  updateEditPass: async (params) => {
   let updateUser = await Api.put("/users/password", params, {
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replaceAll('"', "")}`,
      }
    })
    localStorage.setItem("user", JSON.stringify(updateUser.data))
  },
  delete: async () => {
   await Api.delete("/users/del",{
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replaceAll('"', "")}`,
      }
    })
    localStorage.removeItem("user", null)
    localStorage.removeItem("token", null)
  }
};

export default UserServices;