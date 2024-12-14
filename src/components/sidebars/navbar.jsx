import APG from "../../assets/apg.png";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-4 flex items-center justify-between absolute left-0 top-0 px-6 bg-white shadow-md">
      <div className="w-1/4">
        <img src={APG} alt="logo" className="w-12" />
      </div>
      <nav className="w-2/5">
        <ul className="flex justify-between px-8 text-xl text-slate-600">
          <li
            className="cursor-pointer point-hover"
            onClick={() => navigate("/")}>
            HOME
          </li>
          <li className="cursor-pointer point-hover">
            <p>JUARA</p>
            <div className="absolute hover-juara">
              <div className="text-lg bg-[#008080] rounded-md text-white">
                <div className="flex">
                  <ul>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/pangkalan")}>
                      PANGKALAN
                    </li>
                    <li className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]">
                      REGU
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/sms")}>
                      SMS
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/yell")}>
                      YELL COMPETITION
                    </li>
                  </ul>
                  <ul>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/pbb")}>
                      PBB DASAR
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/apgfest")}>
                      APG25 FEST
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/mading")}>
                      MADING DAUR ULANG 3D
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/gita-galang")}>
                      GITA GALANG
                    </li>
                  </ul>
                  <ul>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/pionering")}>
                      PIONERING KREASI
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/msc")}>
                      MSC
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/filterasi-air")}>
                      FILTERASI AIR
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:bg-[#067b7b]"
                      onClick={() => navigate("/sac")}>
                      SAC
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="cursor-pointer point-hover">ABOUT</li>
        </ul>
      </nav>
      <a href="https://www.instagram.com/pramukaman3jember/" target="_blank">
        <FaInstagram className="text-3xl text-pink-500" />
      </a>
    </div>
  );
};

export default Navbar;
