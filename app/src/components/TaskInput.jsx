import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded-lg p-2"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="bg-blue-500 text-white rounded-lg px-4" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;