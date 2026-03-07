
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavigationvBar from './UI/navigationBar.jsx'
import Homepage from './UI/homePage.jsx'
import { AskQuestion } from './UI/question.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route index element = {<><NavigationvBar/> <Homepage/> </>}/>
          <Route path="/question" element ={<><NavigationvBar/><AskQuestion/></>} />
      </Routes>
    </Router>
  </StrictMode>,
)
