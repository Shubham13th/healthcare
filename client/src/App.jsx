// App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import RegisterPages from './pages/RegisterPages';
import LoginPages from './pages/LoginPages';
import AppointmentsPages from './pages/AppointmentsPages';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/appointments" element={<AppointmentsPages />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
