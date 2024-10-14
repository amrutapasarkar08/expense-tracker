/* eslint-disable */
import React from 'react';
import AdminLayout from './components/adminlayout/AdminLayout'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<AdminLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

