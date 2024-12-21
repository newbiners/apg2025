import { useAtom } from "jotai";
import { loadingAtom } from "../atom";
import "../loading.css";
const Loading = () => {
  const [loading] = useAtom(loadingAtom);
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-screen fixed top-0 left-0 w-full bg-transparent z-50">
          <div className="absolute bg-black w-full h-full opacity-50" />
          {/* <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div> */}
          <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
