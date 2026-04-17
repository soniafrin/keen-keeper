import { NavLink } from "react-router";

const MyNavLink = ({ to, children, className }) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) => `${className} ${isActive ? "bg-[#244D3F] text-white" : "text-gray-500"}`}>{children}</NavLink>
        </div>
    )
}
export default MyNavLink;