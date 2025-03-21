import { v4 as uuidv4 } from 'uuid';

export const workouts = [
  {
    id: uuidv4(),
    title: 'Day 1: Glute Bridges',
    reps: '3 sets of 10 reps',
    description: 'Activates and strengthens the glutes and lower back.',
    done: false,
  },
  {
    id: uuidv4(),
    title: 'Day 2: Bird Dogs',
    reps: '3 sets of 8 reps per side',
    description: 'Improves stability and strengthens the core.',
    done: false,
  },
  {
    id: uuidv4(),
    title: 'Day 3: Dead Bugs',
    reps: '2 sets of 10 reps',
    description: 'Strengthens the lower abs and spinal support.',
    done: false,
  },
  // Add more days here (we’ll expand this in a bit)
];
