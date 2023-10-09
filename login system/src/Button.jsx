import React from 'react';
import './Button.css'

const Button = (props) =>{
    return<div className='Button'>
        <button type = {props.type} > {props.text} </button>
    </div> 
}
    
export default Button;

