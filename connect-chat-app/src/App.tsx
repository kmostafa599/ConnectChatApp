import React from 'react';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <HomePage/>
      </main>
      <footer className='App-footer'>
        footer
      </footer>
    </div>
  );
}

export default App;
