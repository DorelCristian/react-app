// src/components/CursaForm.tsx
import React, { useState } from "react";
import { Cursa } from "../types";

interface CursaFormProps {
  onAddCursa: (newCursa: Cursa) => void;
}

const CursaForm: React.FC<CursaFormProps> = ({ onAddCursa }) => {
  const [destinatie, setDestinatie] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCursa({ destinatie, date });
    setDestinatie("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={destinatie}
        onChange={(e) => setDestinatie(e.target.value)}
        placeholder="Destinație"
        required
      />
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Data"
        required
      />
      <button type="submit">Adaugă Cursa</button>
    </form>
  );
};

export default CursaForm;
