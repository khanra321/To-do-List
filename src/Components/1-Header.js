import{ useState } from 'react';
import "../Styles/Header.css";
import { Search } from "lucide-react";



export default function Header() {

  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = () => {
    if (window.innerWidth <= 500) {
      setShowSearch(!showSearch);
    }
  }
  return (
    <div id="header">
        <div id="navLink" className={showSearch ? "hideNavLink" : ""}>
            <a href="#Home" id="home">Home</a>
            <a href="#About" id="home">About</a>
            <a href="#Contact" id="home">Contact</a>
            <a href="#Login" id="home"> Login</a>
        </div>

        <div id="navSearch"className={showSearch ? "hideNavLink" : ""}>

            <input type="text" id="searchInput" className={showSearch ? "show" : ""} placeholder="
            search task name"/>
            <button id="searchBtn" onClick={handleSearch}><Search size={21} /></button>
            
        </div>
    </div>
  );
}
