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
    backgroundColor: "#c8e6c9", // Fons verd clar
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #388E3C",
    paddingBottom: "15px",
    marginBottom: "30px",
  },
  logoutButton: {
    backgroundColor: "#FF5722",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "10px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "15px 20px",
    cursor: "pointer",
    borderRadius: "10px",
    fontSize: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default UserPetsPage;