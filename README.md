Task Manager App - React Hooks Assignment

This project helps you understand and practice various React Hooks by building a Task Manager App. The app incorporates essential React Hooks for state management, performance optimization, and functionality improvements.

Features

Add, Update, and Delete Tasks: Manage tasks dynamically.
Mark Tasks as Completed: Track task completion status.
Filter Tasks: Filter tasks based on their status.
Dark Mode Toggle: Use useContext to switch between dark and light modes.
Autosave: Automatically saves tasks to localStorage when updated using useEffect.
Optimized Rendering: Use useMemo and useCallback to optimize performance.
State Management with useReducer: Replace useState with useReducer for managing tasks.

Hooks Used

useState: Manage the list of tasks.
useEffect: Autosave tasks and display alerts when the list is updated.
useContext: Implement dark mode toggle with theme persistence.
useReducer: Handle complex state logic for tasks.
useRef: Focus the task input field when the component mounts.
useMemo: Optimize task filtering performance.
useCallback: Memoize functions to prevent unnecessary re-renders.

Real-World Use Cases

Managing form inputs and UI state.
Syncing data with localStorage.
Handling global themes and language preferences.
Optimizing performance and reducing re-renders in large applications.
