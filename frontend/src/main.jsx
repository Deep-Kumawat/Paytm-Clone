import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Send from './pages/Send.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/send' element={<Send />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
