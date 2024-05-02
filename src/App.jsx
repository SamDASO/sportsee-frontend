import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/home";
import Layout from "./Components/Layout/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: ":userId",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
