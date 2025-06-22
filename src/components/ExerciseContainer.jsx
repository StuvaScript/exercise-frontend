import Exercise from "./Exercise";
import styles from "./ExerciseContainer.module.css";

export default function ExerciseContainer({ exercises, handleDelete }) {
  return (
    <div className={styles.container}>
      <div className={styles["titles-row"]}>
        <span className={styles["column-title"]}>Name</span>
        <span className={styles["column-title"]}>Sets</span>
        <span className={styles["column-title"]}>Reps</span>
        <span className={styles["column-title"]}>Measurement</span>
        <span className={styles["column-title"]}>Measurement Unit</span>
      </div>

      {exercises.map((exercise) => (
        <Exercise key={exercise._id} onDelete={handleDelete} {...exercise} />
      ))}
    </div>
  );
}
