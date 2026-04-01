
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavigationvBar from './UI/navigationBar.jsx'
import Homepage from './UI/homePage.jsx'
import { AskQuestion } from './UI/question.jsx'
import { Algebra } from './UI/math/algebra.jsx';
import { Calculus } from './UI/math/calculus.jsx';
import { Geometry } from './UI/math/geometry.jsx';
import { Physics } from './UI/science/physics.jsx';
import { Chemistry } from './UI/science/chemistry.jsx';
import { Biology } from './UI/science/biology.jsx';
import { Ancient } from './UI/history/ancient.jsx';
import { Medieval } from './UI/history/medieval.jsx';
import { Modern } from './UI/history/modern.jsx';
import { English } from './UI/languages/english.jsx';
import { Programming } from './UI/computerscience/programming.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route index element = {<><NavigationvBar/> <Homepage/> </>}/>
          <Route path="/question" element ={<><NavigationvBar/><AskQuestion/></>} />
          <Route path='/algebra' element =  {<><NavigationvBar/><Algebra/></>}/>
          <Route path='/calculus' element = {<><NavigationvBar/><Calculus/></>} />
          <Route path='/geometry' element ={<><NavigationvBar/><Geometry/></>}/>
          <Route path='/physics' element ={<><NavigationvBar/><Physics/></>}/>
          <Route path='/chemistry' element ={<><NavigationvBar/><Chemistry/></>}/>
          <Route path='/biology' element ={<><NavigationvBar/><Biology/></>}/>
            <Route path='/ancient' element ={<><NavigationvBar/><Ancient/></>}/>
          <Route path='/medieval' element ={<><NavigationvBar/><Medieval/></>}/>
          <Route path='/modern' element ={<><NavigationvBar/><Modern/></>}/>
          <Route path='/english' element ={<><NavigationvBar/><English/></>}/>
          <Route path='/programming' element ={<><NavigationvBar/><Programming/></>}/>

      </Routes>
    </Router>
  </StrictMode>,
)
