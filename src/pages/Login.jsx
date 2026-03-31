import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Label from "../Components/Label";
import Input from "../Components/Input.jsx";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = e.target;
    const user = {
      email: payload.email.value,
      password: payload.password.value,
    };
    if (user?.email === "" || user.password === "") {
      alert("email and password field required");
      return;
    }
    loginApi(user);
  };

  const loginApi = async (user) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        },
      );
      const data = await res.json();
      toast.success("Login successful!", { id: toastId });
      if (!res.ok) {
        toast.error(data.message, { id: toastId });
        return;
      }
      toast.success("Login successful!", { id: toastId });
      navigate("/dashboard");
      localStorage.setItem("loginValues", JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(data.token));
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during login.", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label labelText="Email" htmlFor="email" />
            <Input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div></div>
          <div>
            <Label labelText="Password" htmlFor="password" />
            <Input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
        <p className="mt-4 text-center text-sm text-gray-500">
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
