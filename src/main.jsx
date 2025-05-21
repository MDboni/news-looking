import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home.jsx'
import ByCategory from './Page/ByCategory.jsx'
import Details from './Page/Details.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/ByCategory/:' element={<ByCategory/>}/>
         <Route path='/Details/:id'  element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
