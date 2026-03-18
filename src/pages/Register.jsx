import AuthLayout from "../Layouts/AuthLayout";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Label from "../Components/Label";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";


function Register(){

    const handleRegister = async (e)=> {
        e.preventDefault()
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);
        if(user.password !== user.confirmPassword){
            alert("Passwords do not match");
            return;
        }

        // Remove confirmPassword from the user object before sending to backend
        const { confirmPassword, ...userData } = user;

        // Pass the collected user object directly to register()
        await register(userData);
    }

    async function register (user){
        try{
            const res = await fetch("https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
            })

            if(!res.ok){
                alert("Not registered");
                throw new Error("Registration failed");
            }
            const data = await res.json();
            console.log(data);
            alert("Registration successful");
        } catch (err) {
            console.error(err)
            alert("An error occurred during registration");
        }

    }
    return (
        <AuthLayout handleSubmit={handleRegister}>
             <Navbar>
            <Link  to="/">Back</Link>
            <Link  to="/login">Login</Link>
        </Navbar>

            <Label  htmlFor="name">Full name:</Label>
            <Input id="name" name="name" placeholder="enter your name"/>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" placeholder="enter your email" />
            <Label htmlFor="password">Password:</Label>
            <Input type="password" id="password" name="password" placeholder="enter your password" />
            <Label htmlFor="confirmPassword">Confirm password:</Label>
            <Input type="password" id="confirmPassword" name="confirmPassword" placeholder="confirm your password" />
            <Button  btnStyle="register-btn" btnText="Register">Register</Button>
        </AuthLayout>
    )
}
export default Register;