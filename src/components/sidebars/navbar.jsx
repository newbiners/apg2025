import APG from "../../assets/apg.png";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-4  px-6 bg-white shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <img src={APG} alt="logo" className="w-12" />
        </div>
        <nav>
          <ul className="flex justify-between px-8 text-xl text-slate-600 gap-11">
            <li
              className="cursor-pointer point-hover"
              onClick={() => navigate("/")}>
              HOME
            </li>
            <li className="cursor-pointer point-hover">ABOUT</li>
          </ul>
        </nav>
        <a href="https://www.instagram.com/pramukaman3jember/" target="_blank">
          <FaInstagram className="text-3xl text-pink-500" />
        </a>
      </div>
      <div className="max-w-[300rem] mt-9 overflow-x-auto flex items-center">
        <ul className="flex justify-between px-8 text-xl text-slate-600 min-w-[200rem] items-center">
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white min-w-52 flex items-center justify-center rounded-full"
            onClick={() => navigate("/pangkalan")}>
            PANGKALAN
          </li>
          <li className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-52 flex items-center justify-center rounded-full">
            REGU
          </li>
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-52 flex items-center justify-center  rounded-full"
            onClick={() => navigate("/sms")}>
            SMS
          </li>
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-80 flex items-center justify-center  rounded-full"
            onClick={() => navigate("/yell")}>
            YELL COMPETITION
          </li>
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-52 flex items-center justify-center  rounded-full"
            onClick={() => navigate("/pbb")}>
            PBB DASAR
          </li>
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-52 flex items-center justify-center  rounded-full"
            onClick={() => navigate("/apgfest")}>
            APG25 FEST
          </li>
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-80 flex items-center justify-center  rounded-full"
            onClick={() => navigate("/mading")}>
            MADING DAUR ULANG 3D
          </li>
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-52 flex items-center justify-center  rounded-full"
            onClick={() => navigate("/gita-galang")}>
            GITA GALANG
          </li>
          <li
            className="cursor-pointer px-2 py-3 bg-slate-100 hover:text-white hover:bg-[#067b7b] w-80 flex items-center justify-center  rounded-full"
            onClick={() => navigate("/pionering")}>
            PIONERING KREASI
          </li>
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-52 flex items-center justify-center  rounded-full"
            onClick={() => navigate("/msc")}>
            MSC
          </li>
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-52 flex items-center justify-center rounded-full"
            onClick={() => navigate("/filterasi-air")}>
            FILTERASI AIR
          </li>
          <li
            className="cursor-pointer px-2 py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white w-52 flex items-center justify-center  rounded-full"
            onClick={() => navigate("/sac")}>
            SAC
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
