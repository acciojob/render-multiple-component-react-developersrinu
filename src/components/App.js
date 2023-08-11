import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

  const projects = [
    {
      name: 'AI Language Learning App',
      description: 'An application that uses AI to help users learn new languages more effectively.',
    },
    {
      name: 'Virtual Reality Adventure Game',
      description: 'A virtual reality game that takes players on an immersive adventure in a fantasy world.',
    },
    {
      name: 'Sustainable City Planning Platform',
      description: 'A platform for urban planners to design and simulate sustainable and eco-friendly cities.',
    },
  ];

  return (
    <div id = 'main'>
      {projects.map((project, index) => (
        <div key={index}>
          <h2 data-ns-test="project-name">{project.name}</h2>
          <p data-ns-test="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
