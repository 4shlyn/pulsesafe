import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import LoginPage from './loginpage';
import SignupPage from './signuppage';
import UserOverview from './useroverview';
import EnrollPage from './enroll';
import MapPage from './mappage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<SignupPage />}></Route>
          <Route path='/user' element={<UserOverview />}></Route>
          <Route path='/enroll' element={<EnrollPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
