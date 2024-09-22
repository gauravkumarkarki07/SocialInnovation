import { Outlet } from "react-router-dom";
import Header from "./Common/views/Header";
import Sidebar from "./Common/views/Sidebar";

function App() {
  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-[#021c26] border-b">
        <Header />
      </header>
      
      {/* Main layout */}
      <section className="flex mt-10">
        <aside className="w-[20%] h-screen border-r">
          <Sidebar />
        </aside>
        <main className="w-full">
          <Outlet />
        </main>
      </section>
    </>
  );
}

export default App;
