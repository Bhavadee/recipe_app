import React from 'react'
import Home from './Home';
import Cuisine from './cuisine';
import Searched from './searched';
import Recipee from './recipee';
import {Route, Routes} from 'react-router-dom';

function Pages() {
  return (
    
    <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route  path = "/cuisine/:type" element = {<Cuisine />}/>
        <Route  path = "/searched/:search" element = {<Searched />}/>
        <Route  path = "/recipee/:name" element = {<Recipee />}/>
    </Routes>
       
  )
}

export default Pages;
