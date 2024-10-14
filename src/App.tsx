import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { AppRouter } from './router/router';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
