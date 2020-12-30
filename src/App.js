import React, {useState} from 'react'
import Dashboard from './components/Dashboard'
import {Route} from 'react-router-dom'
import axios from 'axios'
import './App.css';

function App() {

  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
