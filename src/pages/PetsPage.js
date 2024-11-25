import React, { useEffect, useState } from "react";
import { getAllPets } from "../services/petsService";
import PetInteractionModal from "./PetInteractionModal";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const PetsPage = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await getAllPets(token);
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, [navigate]);

  const getPetImagePath = (type, color) => {
    return `/images/pets/${type.toLowerCase()}_${color.toLowerCase()}.png`;
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <h2>Les teves mascotes</h2>
      <div style={styles.petsGrid}>
        {pets.map((pet) => (
          <div key={pet.id} style={styles.petCard}>
            <img
              src={getPetImagePath(pet.type, pet.color)}
              alt={`${pet.type} in ${pet.color}`}
              style={styles.petImage}
            />
            <h3>{pet.name}</h3>
            <p>Energy: {pet.energyLevel}</p>
            <p>Hunger: {pet.hungerLevel}</p>
            <p>Happiness: {pet.happinessLevel}</p>
            <button style={styles.button} onClick={() => setSelectedPet(pet)}>
              Interactuar
            </button>
          </div>
        ))}
      </div>
      {selectedPet && (
        <PetInteractionModal
          pet={selectedPet}
          onClose={() => setSelectedPet(null)}
          onUpdate={() => {
            const fetchPets = async () => {
              const token = localStorage.getItem("token");
              const response = await getAllPets(token);
              setPets(response.data);
            };
            fetchPets();
          }}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#e9f7fa",
    minHeight: "100vh",
    paddingTop: "100px",
  },
  petsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  petCard: {
    border: "2px solid #4CAF50",
    borderRadius: "15px",
    padding: "15px",
    textAlign: "center",
    width: "200px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  petImage: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#FF5722",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default PetsPage;