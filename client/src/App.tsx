import { Outlet } from "react-router-dom"
import Header from "./Common/views/Header"
import Sidebar from "./Common/views/Sidebar"

function App() {
  return (
    <>
      <Header/>
      <section className="flex">
        <section className="w-[25%] h-screen border">
          <Sidebar />
        </section>
        <section className="w-full">
          <Outlet />
        </section>
      </section>
    </>
  )
}

export default App