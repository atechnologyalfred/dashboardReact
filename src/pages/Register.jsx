import AuthLayout from "../Layouts/AuthLayout";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Label from "../Components/Label";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Register (e){
    const handleRegister = (e)=> {
        e.preventDefault()
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);
        localStorage.setItem('isLoggedIn', JSON.stringify(user));
        console.log(user)
    }
    return (
        <AuthLayout handleSubmit={handleRegister}>
             <Navbar>
            <Link  to="/">Back</Link>
            <Link  to="/login">Login</Link>
        </Navbar>
            <Label htmlFor="first-name">First name:</Label>
            <Input id="first-name" name="firstName" placeholder="enter your first name" />
            <Label htmlFor="last-name">Last name:</Label>
            <Input id="last-name" name="lastName" placeholder="enter your last name"/>
            <Label  htmlFor="other-names">Other names:</Label>
            <Input id="other-names" name="otherNames" placeholder="enter your other names" />
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" placeholder="enter your email" />
            <Label htmlFor="password">Password:</Label>
            <Input type="password" id="password" name="password" placeholder="enter your password" />
            <Button  btnStyle="register-btn" btnText="Register">Register</Button>
        </AuthLayout>
    )
}
export default Register;