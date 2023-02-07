import { useContext } from "react";
import { Context } from "../../store/context";
import styles from "./index.module.scss";

const Dashboard = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.Dashboard}>
      <img src="https://picsum.photos/75/75" alt="user img" />
      <h2>{state.user.name}</h2>
      <h4>{state.user.email}</h4>
      <button
        onClick={() => dispatch({ type: "CHANGE_USER_NAME", payload: "Dario" })}
      >
        Change title
      </button>
    </div>
  );
};

export default Dashboard;
