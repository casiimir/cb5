import { useContext } from "react";
import { ApplicationCtx } from "../../App";
import styles from "./index.module.scss";

const Navbar = () => {
  const { state } = useContext(ApplicationCtx);

  const onLogout = () => {
    localStorage.removeItem("Note-app-username");
  };

  return (
    <div className={styles.Navbar}>
      <h2 onClick={() => onLogout()}>{state.user.username}</h2>
    </div>
  );
};

export default Navbar;
