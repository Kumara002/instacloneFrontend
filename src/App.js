import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


import LandingPage from './LandingPage';
import Postview from './PostView';
import Form from './Form';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path='/postview' element={<Postview/>}></Route>
      <Route path='/form'element={<Form/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

