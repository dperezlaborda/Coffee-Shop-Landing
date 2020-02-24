import React from 'react';
import './App.css';
import SectionIntro from './Sections/1-Intro/SectionIntro'; 
import SectionTwo from './Sections/2-Two/SectionTwo';
import SectionThree from './Sections/3-Three/SectionThree';
import SectionFour from './Sections/4-Four/SectionFour';
import SectionFive from './Sections/5-Five/SectionFive';
import SectionSix from './Sections/6-Six/SectionSix';
import SectionSeven from './Sections/7-Seven/SectionSeven';
import SectionEight from './Sections/8-Eight/SectionEight';

function App() {
  
  return (
    <div>
        <SectionIntro></SectionIntro>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
        <SectionFive></SectionFive>
        <SectionSix></SectionSix>
        <SectionSeven></SectionSeven>
        <SectionEight></SectionEight>
    </div>
  );
}

export default App;
