import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center text-gray-900">
      <div className="text-center p-10">
        <h1 className="text-5xl font-extrabold mb-4 text-black">Task Management System</h1>
        <p className="text-lg mb-6 text-gray-700">Your personal assistant for organizing tasks, deadlines, and priorities. Stay on top of your work and increase productivity!</p>

        <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Task Management</h3>
            <p>Efficiently create, update, and organize tasks based on priority and due dates.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Prioritization</h3>
            <p>Set task priorities to ensure your most important tasks are handled first.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p>Get real-time updates on the status of your tasks and progress.</p>
          </div>
        </div>
      </div>

      <footer className="mt-20 p-4 text-center text-gray-700 bg-white w-full">
        <p>&copy; {new Date().getFullYear()} Task Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
