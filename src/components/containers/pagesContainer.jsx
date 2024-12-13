import Navbar from "../sidebars/navbar";
const PagesContainer = ({ children }) => {
  return (
    <div className="px-14">
      <Navbar />
      {children}
    </div>
  );
};

export default PagesContainer;
