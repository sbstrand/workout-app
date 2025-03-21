export interface Workout {
  id: string;
  title: string;
  reps: string;
  description: string;
  completed: boolean;
}

export interface WeekColumnProps {
  week: Workout[];
  weekIndex: number;
  onToggle: (id: string) => void;
}

export interface WorkoutCardProps {
  workout: Workout;
  onToggle: (id: string) => void;
}
