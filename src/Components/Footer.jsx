import React from 'react';
import {NavLink} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


import './Home.css'


const Footer = ()=>{
    return(
        <div className='footer'>
            <div className="first">
                <div className="footer-logo">
                    <img src="images/logo.png" alt="" />
                </div>
                <p>Kryptonig 2022. All right Reserved</p>
                <div className="social-icons">
                <a href=""> 
                <FaFacebook/>
                </a>
                <a href="">
                <FaTwitter/>
                </a>
                <a href="">
                <FaInstagram/>
                </a>
                <a href="">
                    <FaYoutube/>
                </a>
                </div>
            </div>
            <div className="others">
                <ul className='other-ul'>
                <li>
                        <NavLink exact to='/' className='other-link'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/About' className='other-link'>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Service' className='other-link'>
                            Services
                        </NavLink>
                    </li>
                </ul>
                <ul className='other-ul'>
                <li>
                        <NavLink exact to='/Nfts' className='other-link'>
                            NFTs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Invest' className='other-link'>
                            Forum
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Blog' className='other-link'>
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <ul className='other-ul'>
                <li>
                        <NavLink exact to='/' className='other-link'>
                            Terms and Conditions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/' className='other-link'>
                            Privacy Policy
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer 