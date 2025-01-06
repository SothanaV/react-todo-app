import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);


  const addTask = (task) =>  {
    let datas = [...tasks, { id: Date.now(), text: task, completed: false }]
    setTasks(datas);
    localStorage.setItem('tasks', JSON.stringify(datas))
  }
  const toggleTask = (id) => {
    let datas = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    setTasks(datas);
    localStorage.setItem('tasks', JSON.stringify(datas));
  } 
  const deleteTask = (id) => {
    let datas = tasks.filter(task => task.id !== id);
    setTasks(datas);
    localStorage.setItem('tasks', JSON.stringify(datas))
  } 
  const filteredTasks = tasks.filter(task =>
    filter === 'All' ? true : filter === 'Completed' ? task.completed : !task.completed
  );

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-5">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
        <TaskInput addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;