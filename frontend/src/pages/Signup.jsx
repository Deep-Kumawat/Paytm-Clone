import { useState } from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputField from '../components/InputField'
import SubmitButton from '../components/SubmitButton'
import BottomWarning from '../components/BottomWarning'
import Error from './Error'
import axios from 'axios';

function signupOnClick(username, firstname, lastname, password, setErrorFlag, setStatus) {

    axios({
        method: 'post',
        url: 'http://localhost:3000/api/v1/user/signup',
        data: {
            username: username,
            firstname: firstname,
            lastname: lastname,
            password: password
        }
    })
    .then((response)=>{
        console.log("inside signup");
        console.log("response: " + response);
        window.open('http://localhost:5173/dashboard')
    })
    .catch((error)=>{
        setErrorFlag(true);
        setStatus(error.response.status);
        console.log("-------error in signup post request-------");
        console.log(error.response.status);
        
    });
    
    
}

function Signup(){
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [errorFlag, setErrorFlag] = useState(false);
    const [status, setStatus] = useState(200);
    console.log(errorFlag);
    console.log(status);
    return (
        <div className='p-5'>
            <Error status={status} flag={errorFlag} />
            <Heading text="Sign Up" center={true}></Heading>
            <Subheading text="Enter your information to create an account" />
            <form>
                <InputField name="firstName" type="text" label="First Name" placeholder="John" onChange={(e) => setFirstName(e.target.value)} />
                <InputField name="lastName" type="text" label="Last Name" placeholder="Doe" onChange={(e) => setLastName(e.target.value)} />
                <InputField name="email" type="text" label="Email" placeholder="johndoe@example.com" onChange={(e) => setUsername(e.target.value)} />
                <InputField name="password" type="password" label="Password" placeholder="Minimum 8 characters" onChange={(e) => setPassword(e.target.value)} />
                <SubmitButton text="Sign Up" bgcolor="bg-black" onClick={(e)=>{e.preventDefault();signupOnClick(username, firstName, lastName, password, setErrorFlag, setStatus)}}></SubmitButton>
                <BottomWarning text="Aready have an account? " linkText="Login" link="http://localhost:5173/signin"></BottomWarning>
            </form>
        </div>
    )
}

export default Signup