import React, { useState } from "react";
import { interactWithPet, deletePet, updatePet } from "../services/petsService";

const PetInteractionModal = ({ pet, onClose, onUpdate }) => {
  const [newName, setNewName] = useState(pet.name);
  const [newColor, setNewColor] = useState(pet.color);

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
    const token = localStorage.getItem("token");
    try {
      await updatePet(pet.id, { name: newName, color: newColor }, token);
      onUpdate();
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>{pet.name}</h3>
        <img
          src={pet.image || "placeholder.png"}
          alt={pet.name}
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
          <input
            type="text"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            placeholder="New color"
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default PetInteractionModal;