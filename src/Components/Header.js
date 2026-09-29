import React from 'react'
import "../Styles/Header.css";

export default function Header() {
  return (
    <div id="header">
        <div id="navLink">
            <a href="toDoList.html" id="home">Home</a>
            <a href="" id="home">About</a>
            <a href="" id="home">Contact</a>
            <a href="Form.HTML" id="home">Login</a>
        </div>
        <div id="navSearch">
            <input type="text" id="searchInput" placeholder="Enter task name"/>
            <button id="searchBtn">Search</button>
        </div>
      
    </div>
  )
}
