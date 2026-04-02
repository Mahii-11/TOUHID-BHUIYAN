import Home from "./pages/Home"
import AppLayout from "./layout/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router"
import ResearchTable from "./pages/ResearchTable";
import CapabilitiesDetails from "./pages/CapabilitiesDetails";
import ContactPage from "./pages/ContactPage";


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
      },

       {
         path: "/contact",
         element: <ContactPage />,
       },
    ]
  }

])







export default function App() {
  return <RouterProvider router={router} />;
}
