import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const [mode, setMode] = useState('light');

  const toggleDarkMode = () => {
    setMode('dark')
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.title = 'Textutils-DarkMode'
    console.log(mode)
  }

  const toggleLightMode = () => {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.title = 'Textutils-LightMode'
    console.log(mode)
  }
  return (
    <>
      <Navbar aboutText='About' title='Navbar' mode={mode} toggleDarkMode={toggleDarkMode} toggleLightMode={toggleLightMode} />
      <Alert alert={alert} />
      <Textform title='Enter Your Text Here' showAlert={showAlert} />
      {/* <About/> */}

      {/* 
      <Router>
        <Routes>
          <Route path='/' element={<Textform title='Enter Your Text Here' showAlert={showAlert} />}></Route>
          <Route path='/home' element={<Textform title='Enter Your Text Here' showAlert={showAlert} />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router> */}

    </>
  );
}
export default App;
