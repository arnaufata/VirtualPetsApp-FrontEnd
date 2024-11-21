import React from "react";
import { useNavigate } from "react-router-dom";

const UserPetsPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to "El zoo d'en Pitus"</h1>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </header>
      <div style={styles.buttonsContainer}>
        <button
          style={styles.button}
          onClick={() => navigate("/create-pet")} // Correcte
        >
          Create New Pet
        </button>
        <button
          style={styles.button}
          onClick={() => navigate("/pets-page")} // Ruta corregida
        >
          Pets
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  logoutButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default UserPetsPage;