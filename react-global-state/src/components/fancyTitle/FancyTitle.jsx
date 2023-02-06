import { useContext, useReducer } from "react";
import { Context } from "../../store/context";
import styles from "./index.module.scss";

const FancyTitle = () => {
  const value = useContext(Context);

  return <h1 className={styles.FancyTitle}>{value.fancyTitle.title}</h1>;
};

export default FancyTitle;
