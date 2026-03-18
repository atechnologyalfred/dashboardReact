import Input from "../Components/Input";
import Label from "../Components/Label";
import Button from "../Components/Button";
import AuthLayout from "../Layouts/AuthLayout";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
function Login () {
    const navigate = useNavigate();
    const handleLogin = (e)=> {
        e.preventDefault()
        const getUser = JSON.parse(localStorage.getItem('isLoggedIn'));
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);
        if(user?.email === getUser?.email && user?.password === getUser?.password){
            localStorage.setItem('isLoggedIn', true);
            navigate('/dashboard');
        } else {
            alert("Please wrong email or password");
            return;
        }

        console.log(user);
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