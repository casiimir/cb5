import { useContext } from "react";
import { Context } from "../../store/context";
import styles from "./index.module.scss";

const Dashboard = () => {
  // const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.Dashboard}>
      <img src="https://picsum.photos/75/75" alt="user img" />
      <h2>Pippo Pluto</h2>
      <h4>pippo.pluto@email.com</h4>
      <button onClick={() => {}}>Change title</button>
    </div>
  );
};

export default Dashboard;
