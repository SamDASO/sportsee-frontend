import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/home";
import Layout from "./Components/Layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
