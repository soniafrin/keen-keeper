const Footer = () => {
    return (
        <footer className="bg-[#244D3F]">
            <div className=" text-center space-y-4 mt-10  text-white pt-20 container mx-auto">
                <h2 className="text-5xl font-bold">KeenKeeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                    <p className="text-xl font-bold">Socials Links</p>
                    <div className="flex">
                        {/* <link>Insta</link>
                    <link>fb</link>
                    <link>x</link> */}
                    </div>
                </div>
                <div className="flex justify-between items-center text-[#fafafa]">
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