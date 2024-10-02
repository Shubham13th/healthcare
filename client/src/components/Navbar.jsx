
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex justify-between items-center">
        <li className="font-bold text-lg">
          <Link to="/">Healthcare Platform</Link>
        </li>
        <li>
          <Link to="/register" className="mx-2">Register</Link>
          <Link to="/login" className="mx-2">Login</Link>
          <Link to="/appointments" className="mx-2">Appointments</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
