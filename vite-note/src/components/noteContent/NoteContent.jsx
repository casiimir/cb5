import NoteList from "../noteList";
import styles from "./index.module.scss";

const NoteContent = () => {
  return (
    <div className={styles.NoteContent}>
      <h2>Le tue note</h2>
      <input type="text" id="search" name="search" placeholder="Cerca..." />
      <NoteList />
    </div>
  );
};

export default NoteContent;
