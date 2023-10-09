import React from 'react'

const Greeting = (props)=>{
    return <div>
        <h4>Welcome {props.htext}</h4>
        <p>  {props.ptext} </p>
    </div>
}

export default Greeting