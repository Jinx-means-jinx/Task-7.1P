import React from 'react'
import './Freelancer.css'

const Freelancer = (props) =>
{
    return<div className='column'>
    <img src={props.avatar} alt='staff' />
    <h2>Name: {props.name}</h2>
    <p>Job Description: {props.description}</p>
    <h6>Rate: {props.rate} Stars</h6>
    </div>
}

export default Freelancer