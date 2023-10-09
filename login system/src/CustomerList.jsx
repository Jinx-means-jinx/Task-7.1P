import React from 'react'
import './Customer.css'
import infList from './infList'
import Customer from './Customer'

function customerComponent (customer , i){
    return <Customer
        key = {customer.key}
        avatar = {customer.avatar}
        name = {customer.name}
        description = {customer.description}
        rate = {customer.rate}
        />
}

const CustomerList = () =>
{
    return<div className='row'>
    {infList.map( ( customer ) => (
    <Customer
    key = {customer.key}
    avatar = {customer.avatar}
    name = {customer.name}
    description = {customer.description}
    rate = {customer.rate}
    />  
))}
    </div>
}

export default CustomerList