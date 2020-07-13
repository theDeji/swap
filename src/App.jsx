import React from 'react';
import Home from './components/Home'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <div>
        <Navigation/>
          <Route exact path='/' component={ Home }/>
          <Route  path='/Privacy' component= { Privacy }/> 
          <Route  path='/Terms' component= { Terms }/> 
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
