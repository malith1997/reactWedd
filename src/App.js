import Nav from './componets/Nav';

import {chakraProvider}  from '@chakra-ui/react';
import React from 'react';

import Rspv from './componets/Rspv';
// import Footer from './componets/footer';
import Hero from './componets/Hero';
import Held from './componets/held';
import Map from './componets/map';


function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Held />
      <Map />
      
    </React.Fragment>
    
  );
}

export default App;

