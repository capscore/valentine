import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from "react-router";
import AcceptancePage from './AcceptancePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/accepted" element={<AcceptancePage />} />
        </Routes>
  </BrowserRouter>
  </StrictMode>,
)
