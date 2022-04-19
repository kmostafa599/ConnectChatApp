import React from 'react';
import './App.css';
import Header from './Components/Header';
import Contacts from './Components/Contacts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <Contacts/>
      </main>
      <footer className='App-footer'>
        footer 
      </footer>
    </div>
  );
}

export default App;
