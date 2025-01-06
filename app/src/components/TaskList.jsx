import React from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex items-center justify-between p-2 border rounded-lg ${
            task.completed ? 'bg-green-100' : 'bg-gray-100'
          }`}
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
          </div>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;