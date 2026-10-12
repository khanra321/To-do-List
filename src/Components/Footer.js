import React from 'react'

export default function Footer() {
    const fStyle = {
        height: "auto",
        width: "100%",
        marginTop: "20px",

        fontSize: "12 px" ,
        color: "white",
        backgroundColor: "black",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "stiky",
        bottom: "0",

    };
  return (
    
    <div id='footer' style ={fStyle} >
        <p style={{marginLeft: "20 px"}}>This is footer</p>
        <p>todo@gmail.com</p>
                    
    </div>
  )
}
