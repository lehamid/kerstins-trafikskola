import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import IntroLogo from './components/IntroLogo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        <IntroLogo />
      </Router >
    </>
  );
}

export default App;