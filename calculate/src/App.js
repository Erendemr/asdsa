import React from 'react'
import Calculator from './Calculator';
import {BrowserRouter as Router,Route,Routes, NavLink} from 'react-router-dom';
import Fcalculator from './Fcalculator';

 function App() {
  return (
    <Router>
    <div>
     
      
      <NavLink to ="/" exact>Calculator</NavLink><br/>
      <NavLink to ="/funccal">Funct</NavLink><br/>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/funccal" element={<Fcalculator/>} />
      </Routes>
    
    </div>
    </Router>
  )
}
export default App;
