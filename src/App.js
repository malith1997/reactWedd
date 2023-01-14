import Nav from './componets/Nav';
import FirstCard from './componets/Card1';
import Title from './componets/Title';
import {chakraProvider}  from '@chakra-ui/react';
import React from 'react';
import SecondCard from './componets/Card2';
import ThirdCard from './componets/Card3';
import FourthCard from './componets/Card4';
import Rspv from './componets/Rspv';
import Footer from './componets/footer';
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
      
      {/* <Title />
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
      <Rspv />
      <Footer /> */} 
    </React.Fragment>
    
  );
}

export default App;

