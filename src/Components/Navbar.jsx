import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = ()=>{
    const [toggle, setToggle] = useState(false)
    const handleClick = ()=>{setToggle(!toggle)
    }
    return(
        <nav className="nav-container">
    
                <NavLink exact to='/' className='nav-logo'>
                    <img src="images/logo.png" alt=""className='logo' />
                </NavLink>

                <ul className={toggle?'uls':'mobile-none'}
                  onClick={()=>setToggle(false)}
                 >
                    <li>
                        <NavLink exact to='/' className='links'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/About' className='links'>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Service' className='links'>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Nfts' className='links'>
                            NFTs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Invest' className='links'>
                            Forum
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Blog' className='links'>
                            Blog
                        </NavLink>
                    </li>
                </ul>

            <div className="joinwish">
                        <NavLink exact to='/Wishlist' className='Wish'>
                            Join Our Wait-List
                        </NavLink>
            </div>
            <div className="menu-btn">
                <button onClick={handleClick}>&#9776;</button>
            </div>
        </nav>
    )
}
export default Navbar