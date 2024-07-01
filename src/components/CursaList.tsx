// src/components/CursaList.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cursa } from "../types";
import CursaItem from "./CursaItem";
import CursaForm from "./CursaForm";

const CursaList: React.FC = () => {
  const [curse, setCurse] = useState<Cursa[]>([]);

  useEffect(() => {
    fetchCurse();
  }, []);

  const fetchCurse = async () => {
    try {
      const response = await axios.get<Cursa[]>("/Cursa");
      setCurse(response.data);
    } catch (error) {
      console.error("Error fetching curse:", error);
    }
  };

  const handleAddCursa = async (newCursa: Cursa) => {
    try {
      const response = await axios.post<Cursa>("/Cursa", newCursa);
      setCurse([...curse, response.data]);
    } catch (error) {
      console.error("Error adding cursa:", error);
    }
  };

  const handleUpdateCursa = async (id: number, updatedCursa: Cursa) => {
    try {
      const response = await axios.put<Cursa>(`/Cursa/${id}`, updatedCursa);
      setCurse(curse.map((cursa) => (cursa.id === id ? response.data : cursa)));
    } catch (error) {
      console.error("Error updating cursa:", error);
    }
  };

  const handleDeleteCursa = async (id: number) => {
    try {
      await axios.delete(`/Cursa/${id}`);
      setCurse(curse.filter((cursa) => cursa.id !== id));
    } catch (error) {
      console.error("Error deleting cursa:", error);
    }
  };

  return (
    <div>
      <h1>Curse</h1>
      <CursaForm onAddCursa={handleAddCursa} />
      <ul>
        {curse.map((cursa) => (
          <CursaItem
            key={cursa.id}
            cursa={cursa}
            onUpdate={handleUpdateCursa}
            onDelete={handleDeleteCursa}
          />
        ))}
      </ul>
    </div>
  );
};

export default CursaList;
