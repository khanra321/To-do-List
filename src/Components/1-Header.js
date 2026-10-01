import React from 'react';
import "../Styles/Header.css";
import { Search } from "lucide-react";


export default function Header() {
  return (
    <div id="header">
        <div id="navLink">
            <a href="#Home" id="home">Home</a>
            <a href="#About" id="home">About</a>
            <a href="#Contact" id="home">Contact</a>
            <a href="#Login" id="home"></a>
        </div>

        <div id="navSearch">

            <input type="text" id="searchInput" placeholder="Enter task name"/>
            <button id="searchBtn"><Search size={24} /></button>
            
        </div>
    </div>
  )
}
