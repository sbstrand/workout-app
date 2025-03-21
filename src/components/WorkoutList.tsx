import WorkoutCard from "./WorkoutCard";
import { Workout } from "@/types";

type WorkoutListProps = {
  workouts: Workout[];
  onToggle: (id: string) => void;
};

export default function WorkoutList({ workouts, onToggle }: WorkoutListProps) {
  if (!workouts || workouts.length === 0) {
    return <p className="text-gray-500">No workouts available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
