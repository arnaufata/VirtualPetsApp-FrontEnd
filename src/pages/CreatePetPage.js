import React, { useState } from "react";
import { createPet } from "../services/petsService";
import { useNavigate } from "react-router-dom";

const CreatePetPage = () => {
  const [formData, setFormData] = useState({ name: "", type: "DOG", color: "red" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      await createPet(formData, token);
      setMessage("Pet created successfully!");
      navigate("/pets");
    } catch (error) {
      setMessage("Error creating pet. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create a New Pet</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="DOG">Dog</option>
          <option value="CAT">Cat</option>
          <option value="DRAGON">Dragon</option>
          <option value="UNICORN">Unicorn</option>
          <option value="ALIEN">Alien</option>
        </select>
        <select
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        >
          <option value="red">Red</option>
          <option value="white">White</option>
          <option value="green">Green</option>
          <option value="brown">Brown</option>
          <option value="black">Black</option>
        </select>
        <button type="submit" style={styles.button}>
          Create Pet
        </button>
      </form>
      {message && <p>{message}</p>}
      <button style={styles.backButton} onClick={() => navigate("/pets")}>
        Cancel·lar i tornar enrere
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    margin: "20px auto",
    maxWidth: "300px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  backButton: {
    marginTop: "10px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default CreatePetPage;