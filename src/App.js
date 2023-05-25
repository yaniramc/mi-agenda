import React from 'react';
import './App.css';

import Agenda from './Components/agenda';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='mt-5'>Mi Agenda</h1>
          <Agenda></Agenda>
        </div>
      </div>
    
    </div>
  );
}

export default App;

