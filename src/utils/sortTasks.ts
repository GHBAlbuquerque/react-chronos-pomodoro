// Generic function to sort an array of tasks
//
// The .sort() method receives a function that compares two items (a, b) and should return:
// - A NEGATIVE number (-1) if "a" should come before "b".
// - A POSITIVE number (1) if "a" should come after "b".
// - ZERO (0) if the order doesn't need to change.
//
// This function handles:
// 1. If the value is null, it moves it to the end of the list.
// 2. If it's a number, it sorts numerically (asc or desc).
// 3. If it's a string, it sorts alphabetically (asc or desc).
//
// The spread [...tasks] creates a copy of the original array so it doesn't mutate it directly.

import type { TaskModel } from '../models/TaskModel';

// Defines the expected parameters for the function
export type SortTasksOptions = {
  tasks: TaskModel[]; // List of tasks to be sorted
  direction?: 'asc' | 'desc'; // Sort direction: ascending or descending (optional)
  field?: keyof TaskModel; // Which task field will be used to sort (optional)
};

export function sortTasks({
  field = 'startDate', // If no field is provided, use 'startDate' by default
  direction = 'desc', // If no direction is provided, use 'desc' (descending) by default
  tasks = [], // If no list is provided, use an empty list
}: SortTasksOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    // Get the value of the chosen property (e.g., startDate) in each task
    const aValue = a[field];
    const bValue = b[field];

    // --- HANDLING NULL VALUES ---

    // If both are null, keep the current order
    if (aValue === null && bValue === null) return 0;

    // If only the first is null, it goes to the end
    if (aValue === null) return 1;

    // If only the second is null, it goes to the end
    if (bValue === null) return -1;

    // --- NUMERIC COMPARISON ---

    // If both values are numbers, subtract to sort
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc'
        ? aValue - bValue // E.g., 1, 2, 3...
        : bValue - aValue; // E.g., 3, 2, 1...
    }

    // --- STRING COMPARISON ---

    // If both values are strings, use localeCompare for alphabetical order
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue) // A -> Z
        : bValue.localeCompare(aValue); // Z -> A
    }

    // --- UNHANDLED CASES ---

    // If it's not a number, string, or null, don't change the order
    return 0;
  });
}
