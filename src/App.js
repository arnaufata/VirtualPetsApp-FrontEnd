import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import UserPetsPage from "./pages/UserPetsPage";
import CreatePetPage from "./pages/CreatePetPage";
import PetsPage from "./pages/PetsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pets" element={<UserPetsPage />} />
        <Route path="/create-pet" element={<CreatePetPage />} />
        <Route path="/pets-page" element={<PetsPage />} />
      </Routes>
    </Router>
  );
}

export default App;