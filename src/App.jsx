import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import TaskForm from './components/TaskForm';
 import TaskList from './components/TaskList';
import ProtectedRoute from './components/utils/Protectedroutes';
import Navbar from './components/Navbar';
 import React from 'react';
function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />

      {/* Use the ProtectedRoute for Dashboard */}
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />

      <Route path="/taskform" element={<TaskForm />} />
      <Route path="/tasklist" element={<TaskList />} />
    </Routes>
  </Router>
  );
}

export default App;
