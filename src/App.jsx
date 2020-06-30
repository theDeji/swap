import React from 'react';
import Home from './components/Home'
import Privacy from './components/Privacy'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <div>
          <Route exact path='/' component={ Home }/>
          <Route  path='/Privacy' component={ Privacy }/>  
          <Route  path='/Contact' component={ Contact }/> 
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
