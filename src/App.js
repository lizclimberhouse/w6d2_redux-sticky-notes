import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StickyForm from './StickyForm';
import StickyList from './StickyList';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <StickyForm />
    <StickyList />
    <Footer />
  </div>
);

export default App;
