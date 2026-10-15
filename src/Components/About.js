import React from 'react';


export default function About() {

const preStyle = {
    padding:"5%",
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
    maxWidth: "100%",
    boxSizing: "borderBox",
    fontFamily: "inherit",
    fontSize: "16px",
    lineHeight: "1.8",
  };



  return (
    <div>
      
      <pre style={preStyle}><h1>To-do-list</h1>
         Welcome to our Todo App — a simple and smart way to organize your daily tasks,<br />stay productive, and keep life on track.
        

        <h2>This app helps you:</h2>

         Add your daily tasks quickly.<br />
         Mark them as complete when done.<br />
         Edit or delete tasks anytime.<br />
         Stay focused with a clean and easy interface.<br />
         We built this app to make task management simple,<br />fast, and stress-free.<br />Whether you are planning your study schedule, office work,<br />or personal goals,<br />our Todo App keeps everything in one place.<br />

        <h2>Our Mission</h2>
        To help people manage time better and stay organized every day.

        <h2>Why Use This App?</h2>

        Simple design.<br />
        Easy to use.<br />
        Works for personal and professional tasks.<br />
        Helps increase productivity.<br />
        This is a nice, professional About page for a todo app.<br />

      </pre>
    </div>
  );
}
