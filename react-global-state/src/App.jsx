import { useReducer } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import FancyTitle from "./components/fancyTitle/FancyTitle";
import { titleReducer } from "./store/reducers";
import { Context } from "./store/context";
import initialState from "./store/state";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(titleReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className={styles.App}>
        <FancyTitle />
        <Dashboard />
      </div>
    </Context.Provider>
  );
}

export default App;
