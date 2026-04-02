import Navbar from "../layout/Navbar";
import { Outlet } from "react-router";
import { FooterSection } from "./FooterSection";
import FloatingSocial from "../components/ui/FloatingSocial";
import { Toaster } from "react-hot-toast";




export default function AppLayout() {
  return (
    <div>
      <Navbar />
          <FloatingSocial />
        <main>
        <Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#0B1F3A",
      color: "#fff",
      borderRadius: "10px",
      padding: "12px 16px",
    },
  }}
/>
         <Outlet/>
        </main>
        <FooterSection/>
    </div>
  )
}
