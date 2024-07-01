// src/components/CursaItem.tsx
import React, { useState } from "react";
import { Cursa } from "../types";

interface CursaItemProps {
  cursa: Cursa;
  onUpdate: (id: number, updatedCursa: Cursa) => void;
  onDelete: (id: number) => void;
}

const CursaItem: React.FC<CursaItemProps> = ({ cursa, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCursa, setUpdatedCursa] = useState<Cursa>({
    destinatie: cursa.destinatie,
    date: cursa.date,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedCursa({ destinatie: cursa.destinatie, date: cursa.date });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedCursa((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (cursa.id !== undefined) {
      onUpdate(cursa.id, updatedCursa);
    }
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            name="destinatie"
            value={updatedCursa.destinatie}
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            value={updatedCursa.date}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Salvează</button>
          <button onClick={handleCancel}>Anulează</button>
        </>
      ) : (
        <>
          <span>
            {cursa.destinatie} - {cursa.date}
          </span>
          <button onClick={handleEdit}>Editează</button>
          <button onClick={() => cursa.id && onDelete(cursa.id)}>Șterge</button>
        </>
      )}
    </li>
  );
};

export default CursaItem;
