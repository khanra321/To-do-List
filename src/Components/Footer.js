import React from 'react';

export default function Footer() {
    const fStyle = {
        minHeight: "60px",
        width: "100%",
        marginTop: "20px",
        padding: "10px 20px",
        boxSizing: "border-box",

        fontSize: "12px",
        color: "white",
        backgroundColor: "black",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
        position: "rela"
    };

    return (
        <footer style={fStyle}>
            <p>This is footer</p>
            <p>todo@gmail.com</p>
        </footer>
    );
}
