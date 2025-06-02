// App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import WelcomePage from './WelcomePage'
import DogCatalog from './DogCatalog'
import DogDetails from './DogDetails'
import About from './About';
import Apply from './Apply';
import Prices from './Prices';


function App() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dogs" element={<DogCatalog />} />
        <Route path="/dog/:id" element={<DogDetails />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/ansok" element={<Apply />} />
        <Route path="/priser" element={<Prices />} />
      </Routes>
      </Router>
    );
}

export default App
