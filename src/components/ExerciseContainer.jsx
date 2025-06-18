import Exercise from "./Exercise";

export default function ExerciseContainer({ exercises, handleDelete }) {
  return (
    <div>
      <div>
        <span>Name</span>
        <span>Sets</span>
        <span>Reps</span>
        <span>Measurement</span>
        <span>Measurement Unit</span>
        <span></span>
        <span></span>
      </div>

      {exercises.map((exercise) => (
        <Exercise key={exercise._id} onDelete={handleDelete} {...exercise} />
      ))}
    </div>
  );
}
