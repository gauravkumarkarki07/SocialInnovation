import { NavLink } from "react-router-dom"
import { House,Flame } from 'lucide-react';

function Sidebar() {
  return (
    <section className="flex flex-col gap-14 h-full text-white px-4 py-4">
        <nav className="flex flex-col gap-4">
            <NavLink to={'/home'} className={({isActive})=> isActive ? 'bg-primary rounded-md':'hover:bg-primary/80 rounded-md'}>
            <section className="flex gap-4 items-center px-2 py-2">
                <House/>
                <span>
                Home
                </span>
            </section>
            </NavLink>
            <NavLink to={'/Popular'} className={({isActive})=> isActive ? 'bg-primary rounded-md':'hover:bg-primary/20 rounded-md'}>
            <section className="flex gap-4 items-center px-2 py-2">
                <Flame/>
                <span>
                Popular
                </span>
            </section>
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