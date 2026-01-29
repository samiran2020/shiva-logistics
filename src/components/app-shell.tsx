import { Outlet } from "react-router-dom"
import Navigation from "./navigation/navigation"
import Footer from "./footer/footer"


const AppLayout = () => {
  return (
    <div className=" body-inner bg-white dark:bg-gray-900 w-full h-full"  >
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout