import APG from "../../assets/apg.png";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import { menu } from "../../atom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [menuSet, setMenu] = useState("home");
  const navigate = useNavigate();

  const handleMenu = (menu, e) => {
    navigate(menu);
    localStorage.setItem("menu", e);
  };

  useEffect(() => {
    const menu = localStorage.getItem("menu");
    setMenu(menu);
  }, []);

  return (
    <div className="w-full py-4  px-6 bg-white shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <img src={APG} alt="logo" className="w-8 sm:w-12" />
        </div>
        <nav>
          <ul className="flex justify-between px-8 text-base sm:text-xl text-slate-600 gap-4 sm:gap-11">
            <li
              className="cursor-pointer point-hover"
              style={{ color: menuSet === "home" ? "#067b7b" : "black" }}
              onClick={() => handleMenu("/", "home")}>
              HOME
            </li>
            <li className="cursor-pointer point-hover">ABOUT</li>
          </ul>
        </nav>
        <a href="https://www.instagram.com/pramukaman3jember/" target="_blank">
          <FaInstagram className="text-3xl text-pink-500" />
        </a>
      </div>
      <div className="sm:max-w-[300rem] mt-9 overflow-x-auto flex items-center">
        <ul className="flex justify-between px-2 sm:px-8 text-base sm:text-xl text-slate-600 min-w-[120rem] sm:min-w-[200rem] items-center">
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "pangkalan" ? "#067b7b" : "",
              color: menuSet === "pangkalan" ? "white" : "black",
            }}
            onClick={() => handleMenu("/pangkalan", "pangkalan")}>
            PANGKALAN
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "regu" ? "#067b7b" : "",
              color: menuSet === "regu" ? "white" : "black",
            }}
            onClick={() => handleMenu("/regu", "regu")}>
            REGU PUTRA
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "regu-putri" ? "#067b7b" : "",
              color: menuSet === "regu-putri" ? "white" : "black",
            }}
            onClick={() => handleMenu("/regu-putri", "regu-putri")}>
            REGU PUTRI
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "sms" ? "#067b7b" : "",
              color: menuSet === "sms" ? "white" : "black",
            }}
            onClick={() => handleMenu("/sms", "sms")}>
            SMS
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "yell" ? "#067b7b" : "",
              color: menuSet === "yell" ? "white" : "black",
            }}
            onClick={() => handleMenu("/yell", "yell")}>
            YELL COMPETITION
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "pbb" ? "#067b7b" : "",
              color: menuSet === "pbb" ? "white" : "black",
            }}
            onClick={() => handleMenu("/pbb", "pbb")}>
            PBB DASAR
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "apgfest" ? "#067b7b" : "",
              color: menuSet === "apgfest" ? "white" : "black",
            }}
            onClick={() => handleMenu("/apgfest", "apgfest")}>
            APG25 FEST
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "mading" ? "#067b7b" : "",
              color: menuSet === "mading" ? "white" : "black",
            }}
            onClick={() => handleMenu("/mading", "mading")}>
            MADING DAUR ULANG 3D
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "gita" ? "#067b7b" : "",
              color: menuSet === "gita" ? "white" : "black",
            }}
            onClick={() => handleMenu("/gita-galang", "gita")}>
            GITA GALANG
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "pionering" ? "#067b7b" : "",
              color: menuSet === "pionering" ? "white" : "black",
            }}
            onClick={() => handleMenu("/pionering", "pionering")}>
            PIONERING KREASI
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "msc" ? "#067b7b" : "",
              color: menuSet === "msc" ? "white" : "black",
            }}
            onClick={() => handleMenu("/msc", "msc")}>
            MSC
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "filterasi-air" ? "#067b7b" : "",
              color: menuSet === "filterasi-air" ? "white" : "black",
            }}
            onClick={() => handleMenu("/filterasi-air", "filterasi-air")}>
            FILTERASI AIR
          </li>
          <li
            className="cursor-pointer px-5 sm:px-2 py-1 sm:py-3 hover:bg-[#067b7b] bg-slate-100 hover:text-white  sm:min-w-52 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: menuSet === "sac" ? "#067b7b" : "",
              color: menuSet === "sac" ? "white" : "black",
            }}
            onClick={() => handleMenu("/sac", "sac")}>
            SAC
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
