import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavigationvBar from './UI/navigationBar.jsx'
import Homepage from './UI/mainPage.jsx'
import { AskQuestion } from './UI/question.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage/>
    {/* <NavigationvBar/>
    <Homepage /> */}
  </StrictMode>,
)
