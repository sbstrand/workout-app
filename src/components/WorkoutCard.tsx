// src/components/WorkoutCard.tsx
import { Workout } from "@/types";
import { cn } from "@/utils/cn";

type WorkoutCardProps = {
  workout: Workout;
  onToggle: (id: string) => void;
};

export default function WorkoutCard({ workout, onToggle }: WorkoutCardProps) {
  return (
    <div
      className={cn(
        "border rounded p-4 shadow-sm cursor-pointer transition",
        workout.completed ? "bg-green-100 border-green-400" : "bg-white"
      )}
      onClick={() => onToggle(workout.id)}
    >
      <h3 className="font-semibold">{workout.title}</h3>
      <p className="text-sm text-gray-600">{workout.reps}</p>
      <p className="text-xs text-gray-500">{workout.description}</p>
    </div>
  );
}
