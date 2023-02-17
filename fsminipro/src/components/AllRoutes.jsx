import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/about' element={<PrivateRoute><About /></PrivateRoute>} />
    </Routes>
  );
}

export default AllRoutes