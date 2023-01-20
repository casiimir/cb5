import Navbar from "../../components/navbar";
import "./index.css";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Navbar />
      {children}
      <h1>FOOTER</h1>
    </div>
  );
};

export default MainLayout;
