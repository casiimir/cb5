import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={styles.MainLayout}>
        <h1>Salve sono il layout!</h1>
        {children}
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
