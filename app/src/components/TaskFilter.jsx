import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
  const filters = ['All', 'Completed', 'Pending'];

  return (
    <div className="flex justify-around mb-4">
      {filters.map((f) => (
        <button
          key={f}
          className={`px-4 py-2 rounded-lg ${
            filter === f ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;