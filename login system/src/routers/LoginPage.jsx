import React, {useState} from 'react'
import Input from '../Input'
import { Link } from "react-router-dom";
import '../login.css'
import { signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/firebase';

const LoginPage = (props)=>{

    const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
    const userDocRef= await createUserDocFromAuth(user)
    }

    const [contact, setContact] = useState({
        email:'',
        password:''
    })

    const {email, password} = contact

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

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
        }
        catch(error){
            console.log('error in login', error.message)
        }
    }

    return <div className='loginpage'>

        <Input
        name = 'email'
        type = "text"
        placeholder = 'email'
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

        <button onClick={handleSubmit}>
        Sign in
        </button>

        <br></br>

        <button onClick={logGoogleUser}>
            Log in with Google
        </button>

        <br></br>
        <br></br>

        <Link to ='/createAccount'>
        Create Account
        </Link>

    </div>
}

export default LoginPage