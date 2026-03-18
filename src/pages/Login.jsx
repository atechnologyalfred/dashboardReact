import Input from "../Components/Input";
import Label from "../Components/Label";
import Button from "../Components/Button";
import AuthLayout from "../Layouts/AuthLayout";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
function Login () {
    const navigate = useNavigate();
    const handleLogin = async (e)=> {
        e.preventDefault()
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);
        console.log(user);
        try {
            await login(user);
            navigate('/dashboard');
        } catch (error) {
            // Error is already handled in login function
        }
    }
    async function login (user){
        try {
            const res = await fetch("https://simple-crud-backend-6o49.onrender.com/api/v1/auth/login",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body : JSON.stringify(user)
            });
            if(!res.ok){
                throw new Error("Login failed");
            }
            const data = await res.json();
            console.log(data.token);
            console.log(data.user.name);
            alert("Login successful");
            // Optionally store token or user data
            localStorage.setItem('token', JSON.stringify( data.token));
            localStorage.setItem('user', JSON.stringify( data.user));
        } catch(err){
            console.error(err);
            alert("Login failed: " + err.message);
        }
        
    }
    return (
       <AuthLayout handleSubmit={handleLogin}>
         <Navbar>
            <Link  to="/">Back</Link>
            <Link  to="/register">Register</Link>
        </Navbar>
        <Label htmlFor="email">Email:</Label>
        <Input  type="text" placeholder="enter your email" id="email"  name="email" />
        <Label htmlFor="password">Password:</Label>
        <Input  type="password" placeholder="enter your password"  id="password" name="password" />
        <Button  btnText="Login" btnStyle="login-btn"/>
        </AuthLayout>
    )
}
export default Login;