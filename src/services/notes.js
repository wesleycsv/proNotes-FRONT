import Api from "./api";

const NotesServices = {
  listNotes: async () =>
    Api.get("/notes/list", {
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replaceAll('"', "")}`,
      },
    }),
  create: async () =>
    await Api.post(
      "/notes/register",
      {
        title: "Nova Nota",
        body: "Novo Conteudo...",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("token")
            .replaceAll('"', "")}`,
        },
      }
    ),
  delete: async (id) =>
    await Api.delete(`/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replaceAll('"', "")}`,
      },
    }),
  update: async (id, params) =>
    await Api.put(`/notes/${id}`, params, {
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replaceAll('"', "")}`,
      },
    }),
  search: async (query) =>
    await Api.get(`/notes/search?query=${query}`, {
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          .replaceAll('"', "")}`,
      },
    }),
};

export default NotesServices;
