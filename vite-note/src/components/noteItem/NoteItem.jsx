import styles from "./index.module.scss";

const NoteItem = ({ data }) => {
  return (
    <div className={styles.NoteItem}>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default NoteItem;
