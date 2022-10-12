import Image from "next/image";
import logo from '../../public/logo.png'
const Header = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-black py-2 text-white text-center font-medium text-sm font-mono">Join the club. Get Rewarded.</div>
            <div className="py-1 text-xs text-slate-500 text-right">
                <span className="px-1"><a href="#">help</a></span>
                <span className="px-1"><a href="#">exchanges and returns</a></span>
                <span className="px-1"><a href="#">order tracker</a></span>
                <span className="px-1"><a href="#">become a member</a></span>
            </div>
            <div className=""><Image width={75} height={55} src={logo}></Image></div>
        </div>
    )
}

export default Header;