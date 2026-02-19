import Home from "../pages/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function AppLayout() {
  return (
    <div>
        <Navbar />
        <main>
         <Home/>
        </main>
        <Footer />
    </div>
  )
}
