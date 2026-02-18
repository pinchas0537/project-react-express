import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import UserContext from "./contexts/UserContext.js"
import SubmitComplaintPage from './pages/SubmitComplaintPage'
import { Route, Routes } from 'react-router'
import AdminLoginPage from './pages/AdminLoginPage'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='submit' element={<SubmitComplaintPage />} />
        <Route path='admin/login' element={<AdminLoginPage />} />
      </Routes>
    </UserContext.Provider>
  )
}
