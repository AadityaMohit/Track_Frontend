import { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import React from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const response = await api.get('/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
      setLoading(false);
    };

    fetchTasks();
  }, []);

  if (loading) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div key={task._id} className="bg-white shadow-xl rounded-lg p-6 transition-all duration-200 hover:shadow-2xl hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-900">{task.title}</h2>
            <p className="text-gray-600 mt-2">{task.description}</p>
            <div className="mt-4">
              <span
                className={`bg-${task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'yellow' : 'green'}-500 text-white px-3 py-1 rounded-full`}
              >
                {task.priority}
              </span>
            </div>
            <div className="mt-3">
              <span className="text-sm text-gray-500">{task.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
