import React from 'react';
import './App.css';
import '../src/components/static/Static.css';
import { Header } from './components/static/Header';
import { MainContent } from './components/static/MainContent';
import { Footer } from './components/static/Footer';

function App() {
  return (
    <div id="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;
