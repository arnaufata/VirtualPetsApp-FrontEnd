import React from "react";
import Navbar from "../components/Navbar";

const UserPetsPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <h1>El teu espai personal</h1>
      <p style={styles.description}>
        Aquesta és la teva àrea d'usuari. Gestiona les teves mascotes, crea-ne
        de noves o explora les que ja tens mitjançant el menú superior.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#c8e6c9",
    minHeight: "100vh",
    paddingTop: "100px", // Ajust per a la Navbar
  },
  description: {
    marginTop: "20px",
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#388E3C",
    maxWidth: "600px",
    margin: "20px auto",
  },
};

export default UserPetsPage;