import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/homepage' element={<SignUpPage/>}/>


      </Routes>
    </div>
  );
}

export default App;
