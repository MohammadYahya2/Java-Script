import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/PersonCard';
import PersonCard from './components/PersonCard';
function App() {
  return (
      <div className="App">
          <PersonCard firstName="Doe" lastName="Jane"age={45}color="Brown" />
          <PersonCard firstName="smith" lastName="john"age={88}color="Brown" />
          <PersonCard firstName="Fillmore" lastName="millard"age={500}color="Brown" />
          <PersonCard firstName="smith" lastName="Maria"age={62}color="Brown" />
      </div>
  );
}



export default App
