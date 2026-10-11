import{ useState } from 'react';
import "../Styles/Header.css";
import {  Search } from "lucide-react";
import {Link} from 'react-router-dom';



export default function Header({searchFun}) {

  const [showSearch, setShowSearch] = useState(false);

  const [search,setSearch] = useState("");

  const handleSearch = () => {
    if (window.innerWidth <= 500) {
      setShowSearch(!showSearch);
    }
    if (search.trim() === ""){
      return;
    }
    searchFun(search);
    setSearch("")
    
  };
  
  return (
    <>
    <div id="header">
        <div id="navLink" className={showSearch ? "hideNavLink" : ""}>
            <Link to="/" id="navB">Home</Link>
            <Link to="/About" id="navB">About</Link>
            <Link to="/Contact" id="navB">Contact</Link>
            <Link to="/Login" id="navB"> Login</Link>
        </div>

        <div id="navSearch"className={showSearch ? "hideNavLink" : ""}>

            <input
             type="text" 
             id="searchInput" 
             className={showSearch ? "show" : ""} 
             value={search}
             onChange = {(e) => setSearch(e.target.value)} 
             placeholder="search task..."
            />

            <button
             id="searchBtn"
             onClick={handleSearch}
            ><Search size={21} /></button>
            
        </div>
    </div>
    </>
  );
}
