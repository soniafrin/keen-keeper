import { Link, NavLink } from "react-router";
import MyNavLink from "./MyNavLink";
import img from "../../assets/logo.png"
import { ChartLine, History, House } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="nav-bar shadow ">
            <div className="flex justify-between container mx-auto p-4">
                <Link to={"/"}>
                    <img src={img} alt="keen keeper logo" />
                </Link>
                <ul className="flex justify-between gap-4">
                    <li >
                        <MyNavLink className="flex px-2 py-1 rounded" to={"/"} ><House className="mr-1" />Home</MyNavLink >
                    </li>
                    <li >
                        <MyNavLink className="flex px-2 py-1 rounded" to={"/timeline"} ><History className="mr-1" />Timeline</MyNavLink >
                    </li>
                    <li >
                        <MyNavLink className="flex px-2 py-1 rounded" to={"/stats"} ><ChartLine className="mr-1" />Stats</MyNavLink >
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;  