import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Todos from "../pages/Todos";
import DetailTodos from "../pages/DetailTodos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Todos />,
      },
      {
        path: "/detail",
        element: <DetailTodos />,
      },
    ],
  },
]);
export default router;
