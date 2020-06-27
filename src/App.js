import React from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import Cart from './components/Cart'
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import PaisaLaya from './components/PaisaLaya'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/Recipe" component={Recipe}/>
          <Route path="/final" component={PaisaLaya}/>
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
