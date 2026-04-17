import { Link } from "react-router"
import fblogo from "../../assets/facebook.png"
import instalogo from "../../assets/instagram.png"
import twitterlogo from "../../assets/instagram.png"
const Footer = () => {
    return (
        <footer className="bg-[#244D3F]">
            <div className=" text-center space-y-4 mt-10  text-white pt-20 container mx-auto">
                <h2 className="text-5xl font-bold">KeenKeeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className="space-y-1">
                    <p className="text-xl font-bold">Socials Links</p>
                    <div className="flex justify-center items-center gap-2">
                        <Link><img src={fblogo} alt="facebook" /></Link>
                        <Link><img src={instalogo} alt="Instagram" /></Link>
                        <Link><img src={twitterlogo} alt="twitter" /></Link>
                        
                    </div>
                </div>
                <hr className="text-slate-700 shadow" />
                <div className="flex flex-col md:flex-row justify-between items-center text-[#fafafa] py-5 md:py-1">
                    <p className="text-center py-6">&copy; 2024 Keen Keeper. All rights reserved.</p>
                    <div className="flex justify-between gap-2">
                        <small>Privacy Policy</small>
                        <small>Terms of Service</small>
                        <small>Cookies</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;