import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <h1 style={styles.logo} onClick={() => navigate("/pets-page")}>
          El zoo d'en Pitus
        </h1>
        <div style={styles.navButtons}>
          <button style={styles.button} onClick={() => navigate("/pets")}>
            Home
          </button>
          <button style={styles.button} onClick={() => navigate("/create-pet")}>
            Crear Mascota
          </button>
          <button style={styles.button} onClick={() => navigate("/pets-page")}>
            Veure Mascotes
          </button>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    zIndex: 1000,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
  },
  navButtons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "#FF5722",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  logoutButton: {
    backgroundColor: "#D32F2F",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar;