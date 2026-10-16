import './App.css';
import { useState } from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js'
import Todos from './Components/Todos.js';
import About from './Components/About.js';
import Login from './Components/Login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [search, setSearch] = useState('');

  const searchFun = (value) => {
    setSearch(value.trim());
  };

  return (
    <Router>
      <div className="page">
        <Header searchFun={searchFun} />
        <main className="main-content">

          <Routes>
            <Route path="/" element={<Todos search={search} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </main>

        <Footer/>
      </div>

    </Router>
  );
}

export default App;
