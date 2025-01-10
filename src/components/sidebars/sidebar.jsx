import APG from "../../assets/apg vertical.png";

const Sidebars = () => {
  return (
    <div className="w-auto">
      <div className="bg-[#7cc5c5] mt-28 p-11 flex items-center justify-center">
        <img src={APG} alt="logo" className="w-1/3" />
      </div>
      <div className="bg-[#008080] p-1 text-white">
        Create By
        <a
          // href="https://gufrondev.my.id/"
          target="_blank"
          className="pl-1 text-yellow-200 underline font-bold">
          @GufronDev
        </a>
      </div>
    </div>
  );
};

export default Sidebars;
