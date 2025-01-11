import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import { AuthLayout } from './layouts/AuthLayout.tsx'
import { Login } from './pages/Login/Login.tsx'
import { Register } from './pages/Register/Register.tsx'
import { Home } from './pages/Home/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
