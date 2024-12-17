import Navbar from "../sidebars/navbar";
import Sidebars from "../sidebars/sidebar";
const PagesContainer = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-14">
        <div className="min-h-screen">{children}</div>
      </div>
      <Sidebars />
    </div>
  );
};

export default PagesContainer;
