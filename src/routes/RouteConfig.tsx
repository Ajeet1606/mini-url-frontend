import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This will render the matched child route */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the layout component
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function RouteConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default RouteConfig;
