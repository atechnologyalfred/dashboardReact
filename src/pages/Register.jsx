import Label from "../Components/Label.jsx";
import Input from "../Components/Input.jsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import Button from "../Components/Button.jsx";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = e.target;
    const fullname = payload.fullname.value;
    const email = payload.email.value;
    const password = payload.password.value;
    const confirmPassword = payload.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const data = { name: fullname, email: email, password: password };
    await registerApi(data);
    e.target.reset();
  };

  const registerApi = async (user) => {
    const toastId = toast.loading("Registering user...");
    try {
      const response = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message, { id: toastId });
        return;
      }

      toast.success("User registered successfully", { id: toastId });
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during registration.", { id: toastId });
    }
  };

  return (
    <>
      <AuthLayout title="Create an Account">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label labelText="Full Name" htmlFor="name" />
            <Input
              type="text"
              id="name"
              name="fullname"
              required
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label labelText="Email" htmlFor="email" />
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label labelText="Password" htmlFor="password" />
            <Input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <div>
            <Label labelText="Confirm Password" htmlFor="confirmPassword" />
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="Confirm your password"
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
        <p className="mt-4 text-center text-sm text-gray-500">
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </AuthLayout>
    </>
  );
}

export default Register;
