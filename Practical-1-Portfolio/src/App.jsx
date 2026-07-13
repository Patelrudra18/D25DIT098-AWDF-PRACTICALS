import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const mySkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git'];

  return (
    <div className="app-shell">
      <NavBar />
      <div className="app">
        <Header name="Rudra Patel" role="Frontend Developer" />
        <About />
        <Skills skillList={mySkills} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
