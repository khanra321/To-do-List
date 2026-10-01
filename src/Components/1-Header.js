import{ useState } from 'react';
import "../Styles/Header.css";
import { Search } from "lucide-react";



export default function Header() {

  const [showSearch, setShowSearch] = useState(false);
  return (
    <div id="header">
        <div id="navLink" className={showSearch ? "hideNavLink" : ""}>
            <a href="#Home" id="home">Home</a>
            <a href="#About" id="home">About</a>
            <a href="#Contact" id="home">Contact</a>
            <a href="#Login" id="home"></a>
        </div>

        <div id="navSearch">

            <input type="text" id="searchInput" className={showSearch ? "show" : ""} placeholder="Enter task name"/>
            <button id="searchBtn" onClick={() => setShowSearch(!showSearch)}><Search size={24} /></button>
            
        </div>
    </div>
  )
}
