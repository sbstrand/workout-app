"use client";

import { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { Workout } from "@/types";
import WeekColumn from "@/components/WeekColumn";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

const getInitialWorkouts = (): Workout[][] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("workouts");
    if (saved) {
      return JSON.parse(saved);
    }
  }

  return Array.from({ length: 4 }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex) => ({
      id: `week${weekIndex + 1}-day${dayIndex + 1}`,
      title: `Day ${dayIndex + 1}`,
      reps: "3 sets of 10 reps",
      description: "Lower back stretch and core activation.",
      completed: false,
    }))
  );
};

export default function WorkoutBoard() {
  const [workouts, setWorkouts] = useState<Workout[][]>(getInitialWorkouts);
  const [currentWeek, setCurrentWeek] = useState(0);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const handleToggle = (id: string) => {
    setWorkouts((prev) =>
      prev.map((week) =>
        week.map((workout) =>
          workout.id === id
            ? { ...workout, completed: !workout.completed }
            : workout
        )
      )
    );
  };

  const handlePrev = () => {
    if (currentWeek > 0) setCurrentWeek((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentWeek < weeks.length - 1) setCurrentWeek((prev) => prev + 1);
  };

  const weekWorkouts = workouts[currentWeek];
  const completedCount = weekWorkouts.filter((w) => w.completed).length;
  const progress = (completedCount / weekWorkouts.length) * 100;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          disabled={currentWeek === 0}
          className="disabled:opacity-30 hover:text-blue-600 transition"
        >
          <ArrowLeft />
        </button>
        <h2 className="text-2xl font-semibold">{weeks[currentWeek]}</h2>
        <button
          onClick={handleNext}
          disabled={currentWeek === weeks.length - 1}
          className="disabled:opacity-30 hover:text-blue-600 transition"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded mb-6">
        <div
          className="bg-green-500 h-2 rounded transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Week Column */}
      <DndContext collisionDetection={closestCenter}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWeek}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <WeekColumn
              week={weekWorkouts}
              onToggle={handleToggle}
              weekIndex={currentWeek}
            />
          </motion.div>
        </AnimatePresence>
      </DndContext>
    </div>
  );
}
