import React from 'react'
import './Customer.css'

const Customer = (props) =>
{
    return<div className='column'>
    <img src={props.avatar} alt='customer' />
    <h2>Name: {props.name}</h2>
    <p>Job Description: {props.description}</p>
    <h6>Rate: {props.rate} Stars</h6>
    </div>
}

export default Customer