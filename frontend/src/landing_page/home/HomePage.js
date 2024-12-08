import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';



function HomePage() {
    return ( 
        <>
            
           <Hero/>
           <Awards/>
           <Pricing/>
           <Education/>
           <Stats/>
           <OpenAccount/>
           
        </>
    );
}

export default HomePage;