import './App.css';
import { useState } from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js'
import Todos from './Components/Todos.js';
import About from './Components/About.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [search, setSearch] = useState('');

  const searchFun = (value) => {
    setSearch(value.trim());
  };

  return (
    <Router>
      <Header searchFun={searchFun} />

      <Routes>
        <Route path="/" element={<Todos search={search} />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;
