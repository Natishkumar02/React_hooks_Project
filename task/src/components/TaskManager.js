import React, { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import "../App.css";
import { ThemeContext } from "../context/ThemeContext";

// Define initial state and reducer function
const initialState = [];
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      );
    default:
      return state;
  }
};

const TaskManager = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTask = useCallback(() => {
    if (newTask.trim() === "") return;
    if (editingTask) {
      dispatch({ type: "EDIT_TASK", payload: { id: editingTask.id, text: newTask } });
      setEditingTask(null);
    } else {
      dispatch({ type: "ADD_TASK", payload: newTask });
    }
    setNewTask("");
    inputRef.current.focus();
  }, [newTask, editingTask]);

  const deleteTask = useCallback((id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  }, []);

  const toggleTaskCompletion = useCallback((id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }, []);

  const editTask = useCallback((task) => {
    setNewTask(task.text);
    setEditingTask(task);
    inputRef.current.focus();
  }, []);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter(task => task.completed);
      case "incomplete":
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div className={`app ${theme}`}>
      <h1>Task Manager</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div className="task-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          ref={inputRef}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={`task ${task.completed ? "completed" : ""}`}>
            <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
            <button onClick={() => editTask(task)}>✏️</button>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
