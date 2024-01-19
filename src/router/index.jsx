import { createBrowserRouter } from "react-router-dom";

import RequeridAuth from "../components/private_router";

import Home from "../pages/home";
import Registro from "../pages/auth/registro";
import Login from "../pages/auth/login";
import Notes from "../pages/notes";
import NotFound from "../pages/notFound";
import UseEdit from "../pages/useEdit";
import UseEditPass from "../pages/useEditPass";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/notes",
    element: (
      <RequeridAuth>
        <Notes />
      </RequeridAuth>
    ),
  },
  {
    path: "/useEdit",
    element: (
      <RequeridAuth>
        <UseEdit />
      </RequeridAuth>
    ),
  },
  {
    path: "/UseEditPass",
    element: (
      <RequeridAuth>
        <UseEditPass />
      </RequeridAuth>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routers;
