import { Outlet } from "react-router";
import NavBar from "../sharedComponents/NavBar";
import Footer from "../sharedComponents/Footer";
import Homepages from "../../pages/Homepages";

const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default RootLayout;