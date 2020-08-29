import React from 'react';
import './App.css';
import Header from './components/header/Header';
import News from './components/news/News';

function App() {
  return (
    <div className="App-header">
      <Header></Header> 
      <News></News>
    </div>
  );
}

export default App;
