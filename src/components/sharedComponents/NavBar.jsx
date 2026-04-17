import { Link, NavLink } from "react-router";
import MyNavLink from "./MyNavLink";
import img from "../../assets/logo.png"
import { ChartLine, History, House, Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="nav-bar shadow ">
            <div className="flex justify-between container mx-auto p-4">
                <Link to={"/"}>
                    <img src={img} alt="keen keeper logo" />
                </Link>
                <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>

                    <Menu />
                </button>
                <ul className={`flex justify-center md:flex-row gap-4 absolute md:static bg-white w-full md:w-auto left-0 p-4 md:p-0 transition-all duration-300 ${isOpen ? "top-16" : "top-[-300px]"
                    }`}>
                    {/* <ul className={`flex flex-col md:flex-row md:static justify-between gap-4 absolute  ${isOpen ? "top-[70px] left-[250px]" : "top-[-150px]" }`}> */}
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