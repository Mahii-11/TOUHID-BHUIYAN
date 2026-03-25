import Home from "../pages/Home"
import Navbar from "../layout/Navbar";



export default function AppLayout() {
  return (
    <div>
      <Navbar />
        <main>
         <Home />
        </main>
    </div>
  )
}
