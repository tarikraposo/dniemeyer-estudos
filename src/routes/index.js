import { createBrowserRouter } from "react-router-dom";
import { Materias } from "../components/Materias";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Materias />,
  },
]);

export default router;
