import Home from "./pages/Home"
import AppLayout from "./layout/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router"
import ResearchTable from "./pages/ResearchTable";
import CapabilitiesDetails from "./pages/CapabilitiesDetails";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/research",
        element: <ResearchTable />
      },
      {
        path: "/capabilities/:slug",
        element: <CapabilitiesDetails />
      }
    ]
  }

])







export default function App() {
  return <RouterProvider router={router} />;
}
