import './App.scss';
import Sidebar from './components/Sidebar';
import Orders from './components/sections/Orders';
import Patients from './components/sections/Patients';
import Projects from './components/sections/Projects';
import Results from './components/sections/Results';
import Summary from './components/sections/Summary';
import SinglePatient from './components/sections/SinglePatient';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
      if(width <= 900) setIsMenuOpen(false)
      else setIsMenuOpen(true)
    }
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)
  })
  
  return (
    <div className="dashboard">
      <Router>
        {/* LEFT AREA */}
        {isMenuOpen && <Sidebar />}
        
        {/* RIGHT AREA */}
        <div className="container" style={{width: isMenuOpen ? 'calc(100% - 300px)' : '100%'}}>
        <div className="mobileMenu" onClick={openMenu}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z" fill="currentColor" /><path d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z" fill="currentColor" /><path d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z" fill="currentColor" /></svg></div>
          <Routes>
            <Route path='/' element={<Summary />} />
            <Route path='/patients' element={<Patients />} />
            <Route path='/patients/single' element={<SinglePatient />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/results' element={<Results />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
