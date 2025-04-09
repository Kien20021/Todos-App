import { RouterProvider } from "react-router-dom";
import "./App.css";
import Todos from "./pages/Todos";
import router from "./routers/Router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
