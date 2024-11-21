import React, { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook per redirigir

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      setMessage(response.data);
      // Opcional: redirigir automàticament al login després del registre
      navigate("/login");
    } catch (error) {
      setMessage("Error en el registre: " + error.response.data);
    }
  };

  return (
    <div>
      <h2>Registre</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Registra't</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Ja tens un compte?{" "}
        <button onClick={() => navigate("/login")}>
          Inicia sessió
        </button>
      </p>
    </div>
  );
};

export default Register;