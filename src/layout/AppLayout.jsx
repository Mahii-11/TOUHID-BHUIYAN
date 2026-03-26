import Navbar from "../layout/Navbar";
import { Outlet } from "react-router";
import { FooterSection } from "./FooterSection";
import FloatingSocial from "../components/ui/FloatingSocial";




export default function AppLayout() {
  return (
    <div>
      <Navbar />
          <FloatingSocial />
        <main>
         <Outlet/>
        </main>
        <FooterSection/>
    </div>
  )
}
