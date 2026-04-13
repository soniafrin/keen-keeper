import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <nav className="nav-bar shadow ">
            <div className="flex justify-between container mx-auto p-4">
                <h1><span className="font-bold">Keen</span>Keeper</h1>
                <ul className="flex justify-between gap-4">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/timeline">Timeline</NavLink></li>
                    <li><NavLink to="/stats">Stats</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;  