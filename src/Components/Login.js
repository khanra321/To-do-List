import React from 'react';
import "../Styles/Login.css";

export default function Login() {
  return (
    <div id="bod">
        <div id="outerDiv">
            <div id="innerDiv">
                <p id="paraLog">Login</p>
                <label id="lab1"></label>
                <input class="inp" type="text" id="userName" placeholder="User name" />

                <label id="lab2"></label>
                <input class="inp" type="text" id="password" placeholder="Passwor" />

                <label id="lab3"></label>
                <input class="inp" type="text" id="conformPassword" placeholder="Conform password" />

                <button id="subBtn">submit</button>
            </div>
        </div>
    </div>
  )
}
