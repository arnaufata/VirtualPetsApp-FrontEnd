import React, { useEffect, useState } from "react";
import { getAllPets } from "../services/petsService";
import { useNavigate } from "react-router-dom";
import PetInteractionModal from "./PetInteractionModal";

const PetsPage = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null); // Mascota seleccionada per interactuar
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

  return (
    <div style={styles.container}>
      <h2>Les teves mascotes</h2>
      <div style={styles.petsGrid}>
        {pets.map((pet) => (
          <div key={pet.id} style={styles.petCard}>
            <img
              src={pet.image || "placeholder.png"} // Substitueix amb imatge per defecte
              alt={pet.name}
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
      <button style={styles.backButton} onClick={() => navigate("/pets")}>
        Tornar enrere
      </button>
      {selectedPet && (
        <PetInteractionModal
          pet={selectedPet}
          onClose={() => setSelectedPet(null)}
          onUpdate={() => {
            // Actualitzar mascotes després d'interactuar
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
  },
  petsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  petCard: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    width: "200px",
  },
  petImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  backButton: {
    marginTop: "20px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default PetsPage;