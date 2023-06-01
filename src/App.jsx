import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Service from './Components/pages/Service';
import Nfts from './Components/pages/Nfts';
import Invest from './Components/pages/Invest';
import Blog from './Components/pages/Blog';
import Wishlist from './Components/pages/wishlist';
import Featured from './Components/pages/Featured';
import Featured2 from './Components/pages/Featured2';
import Featured3 from './Components/pages/Featured3';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route  path='/About' Component={About}></Route>
          <Route  path='/Service' Component={Service}></Route>
          <Route  path='/Nfts' Component={Nfts}></Route>
          <Route  path='/Invest' Component={Invest}></Route>
          <Route  path='/Blog' Component={Blog}></Route>
          <Route  path='/Wishlist' Component={Wishlist}></Route>
          <Route  path='/featured' Component={Featured}></Route>
          <Route path='/Featured2' Component={Featured2}></Route>
          <Route path='/Featured3' Component={Featured3}></Route>
          </Routes>
      </Router>
      
    </div>
  )
}

export default App
