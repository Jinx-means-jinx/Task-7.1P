import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return(
        <div className='footer'>
            <div className='title'>
                <h7>For Dev </h7>
                <h8>For Clients</h8>
                <h9>For Stay connected</h9>
            </div>
            <div className='link'>

                <div className='firstColumn'>
                <li><a href="#">How it works</a></li>
                <li><a href="#">How to create a profile</a></li>
                <li><a href="#">Find jobs</a></li>
                </div>

                <div className='secondColumn'>
                <li><a href="#">How it works</a></li>
                <li><a href="#">How to post a profile</a></li>
                <li><a href="#">Find dev</a></li>
                </div>

                <div className='thirdColumn'>
                <a href="http://facebook.com">
                    <FontAwesomeIcon icon={faFacebook} /> </a>
                

                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} /> </a>
                

                <a href="https://www.instagram.com//">
                    <FontAwesomeIcon icon={faInstagram} /> </a>
                
               
                </div>
            </div>
            <div className='titleBottom'>
                <h10>Dev Link </h10>
                <div className='bottomRow'>
                    <a className='firstLink1'  href="#">Privacy Policy</a>
                    <a className='secondLink1' href="#">Terms</a>
                    <a className='thirdLink1' href="#">Code of Conduct</a>
                </div>
            </div>
        </div>
    )
}
    
export default Footer;