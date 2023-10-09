import React, {useState} from 'react'
import Input from '../Input'
import '../createAccount.css'
import { Link } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth,} from '../utils/firebase';

const CreateAccount = (props)=>{
    const [contact, setContact] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
    })

    const {displayName, email, password, confirmPassword} = contact;

    const handleChange = (event)=>{
        const {name, value} = event.target 
        setContact ((preValue)=>{
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleSubmit = async(event)=>
    {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Passwords do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword( email, password)
            await createUserDocFromAuth (user, {displayName})
        }
        catch(error){
            console.log('error in creating user', error.message)
        }
    }

    return <div className='loginpage'>

        <Input
        name = 'displayName'
        type = "text"
        placeholder = 'name'
        onChange = {handleChange}
        value = {contact.displayName}
        />

        <br></br>

        <Input
        name = 'email'
        type = "email"
        placeholder = 'usemailername'
        onChange = {handleChange}
        value = {contact.email}
        />

        <br></br>

        <Input 
        name = "password"
        type = 'password'
        placeholder = 'password'
        onChange = {handleChange}
        value = {contact.password}
        />

        <br></br>

        <Input 
        name = "confirmPassword"
        type = 'confirmPassword'
        placeholder = 'confirmPassword'
        onChange = {handleChange}
        value = {contact.confirmPassword}
        />

        <br></br>

        <button onClick={handleSubmit}>
        Create
        </button>


        <br></br>
        <br></br>

        <Link to ='/login'>
        Login
        </Link>

    </div>
}

export default CreateAccount