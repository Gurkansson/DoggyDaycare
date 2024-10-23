import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import WelcomePage from './WelcomePage'
import DogCatalog from './DogCatalog'
import DogDetails from './DogDetails'


function App() {
  
    return (
      <Router>
        <Routes>
          <Route path="/start" element={<WelcomePage />} />
          <Route path="/dogs" element={<DogCatalog />} />
          <Route path="/dog/:id" element={<DogDetails />} />
        </Routes>
      </Router>
    );
}

export default App
 