import React from 'react';
import BlogPost from './blogprop';

import {NavLink} from 'react-router-dom';

import './Blog.css'

const Blogs = () => {

    const post = [
      {
        
      }
    ]
  return (
    <div className="Appblog">
      
      <NavLink exact to='/featured'>
          <BlogPost 
            blogImg ='images/Blog 2.jpg'
            tittle="4 Alternative career path to earn in crypto without trading"
            content="How was the feeling when you decided to go into crypto? How did you cope with all those charts, those never-ending analyses? You probably saw how much you can lose if the market goes against you and wondered if you would be able to cope. Did you download a crypto trading app, open it, and wonder what all those figures and signs were doing there?"
            date="April 11, 2023"
            publish='Sobechi Evans'
            crypto='Cryptocurrency'
            tech='Technology'
          />
      </NavLink>
     
      <NavLink exact to='/featured2'>
      <BlogPost 
        blogImg ='images/Blog 3.jpg'
        tittle="Understanding the DAO Model in Web3"
        content="The Concept of Decentralized Autonomous Organizations (DAOs) has been growing in popularity and usage within the Web3 space. You probably heard of CityDAO that acquired 40 acres of land in Wyoming in November 2021; "
        date="April 11, 2023"
        publish='Sobechi Evans'
        crypto='Cryptocurrency'
        tech='Technology'
      />
      </NavLink>
      
      <NavLink exact to='/featured3'>
      <BlogPost 
        blogImg ='images/slide3.jpg'
        tittle="Benefits of DAOs to web3 projects, creators and communities"
        content="Blockchain Technology ushered in an era of technological development built on the principles of decentralization, transparency, and Trust. "
        date="April 24th, 2023"
        publish='Sobechi Evans'
        crypto='Cryptocurrency'
        tech='Technology'
      />
      </NavLink>
      
   </div>
  );
}

export default Blogs;
