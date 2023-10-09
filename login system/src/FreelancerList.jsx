import React from 'react'
import './Freelancer.css'
import staffList from './staffList'
import Freelancer from './Freelancer'

function freelancerComponent (staff , i){
    return <Freelancer
        key = {staff.key}
        avatar = {staff.avatar}
        name = {staff.name}
        description = {staff.description}
        rate = {staff.rate}
        />
}

const FreelancerList = () =>
{
    return<div className='row'>
    {staffList.map( (staff ) => (
    <Freelancer
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    description = {staff.description}
    rate = {staff.rate}
    />  
))}
    </div>
}


export default FreelancerList