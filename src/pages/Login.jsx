import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // ✅ backend now returns { token, role }
      const { token, role } = res.data;

      // save in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // redux store
      dispatch(
        loginSuccess({
          user: { email, role },
          token,
        })
      );

      alert("Login Successful");

      // 🔥 ROLE BASED NAVIGATION
      if (role === "ADMIN") {
        navigate("/dashboard/dashboardhome");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.log(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <form onSubmit={handleLogin} className="space-y-3">

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;