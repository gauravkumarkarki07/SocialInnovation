import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <section className="flex flex-col gap-14">
        <nav className="flex flex-col gap-4">
            <NavLink to={'/home'}>
                Home
            </NavLink>
        </nav>
        <nav>
            <NavLink to={'/'}>
                Create new Idea
            </NavLink>
        </nav>
    </section>
  )
}

export default Sidebar