import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-200">
      <h3 className="text-xl font-semibold text-gray-900">{task.title}</h3>
      <p className="text-gray-600 mt-2">Status: <span className={`font-medium text-${task.status === 'Completed' ? 'green' : 'yellow'}-500`}>{task.status}</span></p>
      <p className="text-gray-500 mt-2">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      
      {/* Displaying priority like title and description */}
      <p className={`text-${task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'yellow' : 'green'}-500 font-semibold mt-2`}>
        Priority: {task.priority}
      </p>
    </div>
  );
};

export default TaskItem;
