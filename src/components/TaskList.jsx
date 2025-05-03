import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('https://backendtest-2-j41i.onrender.com/api/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Tasks</h2>

      {tasks.length > 0 ? (
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
