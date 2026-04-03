import Home from "./pages/Home"
import AppLayout from "./layout/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router"
import ResearchTable from "./pages/ResearchTable";
import CapabilitiesDetails from "./pages/CapabilitiesDetails";
import ContactPage from "./pages/ContactPage";
import SocialImpactPage from "./pages/SocialImpactPage";


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

         {
    path: "/social-impact",
    element: <SocialImpactPage />,
  },
    ]
  }

])







export default function App() {
  return <RouterProvider router={router} />;
}
