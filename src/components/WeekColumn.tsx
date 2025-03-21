import WorkoutList from "./WorkoutList";
import { Workout } from "@/types";

type WeekColumnProps = {
  week: Workout[];
  onToggle: (id: string) => void;
  weekIndex: number;
};

export default function WeekColumn({ week, onToggle }: WeekColumnProps) {
  return (
    <div>
      <WorkoutList workouts={week} onToggle={onToggle} />
    </div>
  );
}
