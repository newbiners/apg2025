import APG from "../../assets/apg.png";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="w-1/4">
        <img src={APG} alt="logo" className="w-12" />
      </div>
      <nav className="w-2/5">
        <ul className="flex justify-between px-8 text-xl text-slate-600">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer point-hover">
            <p>JUARA</p>
            <div className="absolute hover-juara">
              <ul className="text-lg bg-slate-400 rounded-md text-white">
                <li className="cursor-pointer px-2 py-1 hover:bg-slate-500">
                  JUARA 1
                </li>
                <li className="cursor-pointer px-2 py-1 hover:bg-slate-500">
                  JUARA 2
                </li>
                <li className="cursor-pointer px-2 py-1 hover:bg-slate-500">
                  JUARA 3
                </li>
              </ul>
            </div>
          </li>
          <li className="cursor-pointer">LOMBA</li>
          <li className="cursor-pointer">ABOUT</li>
        </ul>
      </nav>
      <a href="https://www.instagram.com/pramukaman3jember/" target="_blank">
        <FaInstagram className="text-3xl text-pink-500" />
      </a>
    </div>
  );
};

export default Navbar;
