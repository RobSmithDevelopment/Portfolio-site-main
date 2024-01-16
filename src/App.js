import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<><Main /></>} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
