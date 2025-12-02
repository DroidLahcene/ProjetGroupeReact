import { NavLink } from "react-router";


export default function MainNav() {
    return (
        <nav className="bg-red-600 text-white flex  justify-center mb-10 ">
            <menu className="flex h-15 items-center ">
                <li className="px-2 font-bold text-2xl">
                    <NavLink to="/" >
                        Accueil
                    </NavLink>

                </li>
                <li className="px-2 font-bold text-2xl">
                    <NavLink to="/playlist">
                        Playlist
                    </NavLink>

                </li>

                <li className="px-2 font-bold text-2xl">
                    <NavLink to="/Desktop">
                        Desktop
                    </NavLink>

                </li>

                <li className="px-2 font-bold text-2xl">
                    <NavLink to="/Mobile">
                        Mobile
                    </NavLink>

                </li>





            </menu>

        </nav>

    )
}