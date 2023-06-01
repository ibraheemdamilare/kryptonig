import React from 'react';
import Hero from '../Hero-section';
import Illustrator from '../illustrator';
import Projects from '../projects';
import Play from '../video';
import More from '../more';
import Logo from '../Logo';
import Footer from '../Footer';


const Home = ()=>{
    return(
       <div className="section">
            <Hero/>
            <Illustrator/>
            <Projects/>
            <Play/>
            <More/>
            <Logo/>
            <Footer/>
       </div>
    )
}
export default Home