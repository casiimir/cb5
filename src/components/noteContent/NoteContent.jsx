import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import NoteList from "../noteList";
import styles from "./index.module.scss";

const NoteContent = () => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleSearch = (e) => {
    dispatch({ type: "ON_SEARCH_NOTE", payload: e.target.value });
  };

  return (
    <div className={styles.NoteContent}>
      <h2>Le tue note</h2>
      <input
        onInput={onHandleSearch}
        type="text"
        id="search"
        name="search"
        placeholder="Cerca..."
      />
      <NoteList />
    </div>
  );
};

export default NoteContent;
