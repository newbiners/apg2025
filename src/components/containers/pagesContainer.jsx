import Navbar from "../sidebars/navbar";
import Sidebars from "../sidebars/sidebar";
import Loading from "../loading";
// import { useAtom } from "jotai";
// import { loadingAtom } from "../../atom";
const PagesContainer = ({ children }) => {
  // const [loading] = useAtom(loadingAtom);
  return (
    <div className="relative">
      <Navbar />
      <div className="px-4 sm:px-14">
        <div className="min-h-screen">{children}</div>
      </div>
      <Loading />
      <Sidebars />
    </div>
  );
};

export default PagesContainer;
