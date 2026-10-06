import './App.css';
import { useState } from 'react';
import Header from './Components/1-Header.js';
import Todos from './Components/Todos.js';



function App() {
  const [search, setSearch] = useState('');

  const searchFun = (value) => {
    setSearch(value.trim());
  };

  return (
    <>
      <Header searchFun={searchFun} />
      <Todos search={search} />
    </>
  );
}

export default App;
