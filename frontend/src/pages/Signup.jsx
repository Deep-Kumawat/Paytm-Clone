import react from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputField from '../components/InputField'
import SubmitButton from '../components/SubmitButton'
import BottomWarning from '../components/BottomWarning'
function goToDashboard(){
    
}

function Signup(){
    return (
        <div className='p-5'>
            <Heading text="Sign Up" center={true}></Heading>
            <Subheading text="Enter your information to create an account" />
            <form>
                <InputField name="firstName" type="text" label="First Name" placeholder="John" />
                <InputField name="lastName" type="text" label="Last Name" placeholder="Doe" />
                <InputField name="email" type="text" label="Email" placeholder="johndoe@example.com" />
                <InputField name="password" type="password" label="Password" placeholder="" />
                <SubmitButton text="Sign Up" onClick={goToDashboard}></SubmitButton>
                <BottomWarning text="Aready have an account? " linkText="Login" link="#"></BottomWarning>
            </form>
        </div>
    )
}

export default Signup