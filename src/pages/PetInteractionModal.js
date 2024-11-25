import React, { useState } from "react";
import { interactWithPet, deletePet, updatePet } from "../services/petsService";

const PetInteractionModal = ({ pet, onClose, onUpdate }) => {
  const [newName, setNewName] = useState(pet.name);

  const handleInteraction = async (action) => {
    const token = localStorage.getItem("token");
    try {
      await interactWithPet(pet.id, action, token);
      onUpdate();
    } catch (error) {
      console.error(`Error performing ${action}:`, error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      await deletePet(pet.id, token);
      onClose();
      onUpdate();
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  const handleUpdate = async () => {
    if (!newName.trim()) {
      alert("El nom no pot estar buit.");
      return;
    }

    const token = localStorage.getItem("token");
    try {
      await updatePet(pet.id, { name: newName.trim() }, token); // Només actualitzar el nom
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating pet:", error);
      alert("No s'ha pogut actualitzar el nom de la mascota. Torna-ho a intentar.");
    }
  };

  const getPetImagePath = (type, color) => {
    return `/images/pets/${type.toLowerCase()}_${color.toLowerCase()}.png`;
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>{pet.name}</h3>
        <img
          src={getPetImagePath(pet.type, pet.color)} // Utilitzem la funció definida localment
          alt={`${pet.type} in ${pet.color}`}
          style={styles.image}
        />
        <p>Energy: {pet.energyLevel}</p>
        <p>Hunger: {pet.hungerLevel}</p>
        <p>Happiness: {pet.happinessLevel}</p>
        <div>
          <h4>Update Pet</h4>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="New name"
          />
          <button style={styles.button} onClick={handleUpdate}>
            Update
          </button>
        </div>
        <div>
          <button style={styles.button} onClick={() => handleInteraction("feed")}>
            Feed
          </button>
          <button style={styles.button} onClick={() => handleInteraction("play")}>
            Play
          </button>
          <button style={styles.button} onClick={() => handleInteraction("rest")}>
            Rest
          </button>
          <button style={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </div>
        <button style={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "20px",
    width: "450px",
    textAlign: "center",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    marginBottom: "15px",
    borderRadius: "10px",
  },
  button: {
    backgroundColor: "#FF5722",
    color: "white",
    border: "none",
    padding: "10px 15px",
    margin: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#D32F2F",
    color: "white",
    border: "none",
    padding: "10px 15px",
    margin: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  closeButton: {
    backgroundColor: "#00796B",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default PetInteractionModal;