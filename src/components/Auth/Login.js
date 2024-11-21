import React, { useState } from "react";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook per redirigir

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      const token = response.data.token;
      localStorage.setItem("token", token); // Guarda el token al localStorage
      setMessage("Login correcte!");
      navigate("/pets"); // Redirigeix a la pàgina de mascotes
    } catch (error) {
      setMessage("Credencials incorrectes.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        No tens un compte?{" "}
        <button onClick={() => navigate("/register")}>
          Registra't
        </button>
      </p>
    </div>
  );
};

export default Login;