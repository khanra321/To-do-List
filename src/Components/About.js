import React from 'react';


export default function About() {
  const aboutStyl = {
    // marginTop: "100px",
    // whiteSpace: "pre-wrap",

    // padding: "20px",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center"

    
    width: "100%",
    maxWidth: "100%",
    padding: "20px",
    boxSizing: "borderBox",
  };

const preStyle = {
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
    maxWidth: "100%",
    boxSizing: "borderBox",
    fontFamily: "inherit",
    fontSize: "16px",
    lineHeight: "1.8",
  };



  return (
    <div className="about-container" style={aboutStyl}>
      <h1>To-do-list</h1>
      <pre style={preStyle}>Welcome to our Todo App — a simple and smart way to organize your daily tasks, stay productive, and keep life on track.
        

        This app helps you:

        Add your daily tasks quickly
        Mark them as complete when done
        Edit or delete tasks anytime
        Stay focused with a clean and easy interface
        We built this app to make task management simple, fast, and stress-free. Whether you are planning your study schedule, office work, or personal goals, our Todo App keeps everything in one place.

        Our Mission
        To help people manage time better and stay organized every day.

        Why Use This App?

        Simple design
        Easy to use
        Works for personal and professional tasks
        Helps increase productivity
        This is a nice, professional About page for a todo app.

        If you want, I can also give you:

        a full React JSX About page
        a Bengali version
        a modern stylish About page design with CSS
        a short and simple version for a portfolio/project site
      </pre>
    </div>
  );
}
