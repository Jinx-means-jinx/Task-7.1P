import React from 'react'
import './App.css';
import LoginPage from './routers/LoginPage';
import {Routes, Route} from 'react-router-dom';
import CreateAccountPage from './routers/CreateAccountPage';
import HomePage from './routers/HomePage';


function App() {
  return (
    
    <div>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/createAccount' element={<CreateAccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
