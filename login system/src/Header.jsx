import React from 'react'   
import './Header.css'   
import { Link } from "react-router-dom";

function Header(props)
{
    return<div className='header-div'><h1>DevLink Marketplace</h1> 
    <nav>
        <a className='firstLink' href="#"> Find DEV</a>
        <a className='secondLink' href="#"> Find Jobs</a>
        <Link className='thirdLink' to="/login">Login</Link>
        <Link className='fourthLink' to="/createAccount">Create Account</Link>
    </nav>
    
    
   
    </div>
}

export default Header