import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import './styles.css';
import localforage from 'localforage';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localforage.getItem('tasks').then((storedTasks) => {
      if (storedTasks) {
        setTasks(storedTasks);
      } else {
        setTasks([]);
      }
    });
  }, []);

  useEffect(() => {
    localforage.setItem('tasks', tasks);
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = { id: uuidv4(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <input 
        type="text" 
        placeholder="Añadir tarea" 
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            addTask(e.target.value);
            e.target.value = '';
          }
        }} 
      />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} setTasks={setTasks} />
    </div>
  );
};

export default App;