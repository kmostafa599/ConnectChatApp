import {useEffect} from 'react';
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
        footer hey hey hey hye
      </footer>
    </div>
  );
}

export default App;

