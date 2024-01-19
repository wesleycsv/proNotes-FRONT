import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import Routers from "./router";

import { StylesGlobal } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StylesGlobal />
    <RouterProvider router={Routers} />
  </React.StrictMode>
);
