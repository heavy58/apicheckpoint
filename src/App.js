import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Navbar';
import ContactList from './ContactList'
import AddContact from './AddContact';
import EditContact from './EditContact';

function App() {
  return (
    <div className="App">
     <Router>
     <Route path='/' component={Navbar}/>
     <Route path='/contacts' component={ContactList}/>
     <Route path='/Ajouter' component={AddContact}/>
     <Route path='/Edit/:id' component={EditContact}/>
     </Router>
    </div>
  );
}

export default App;