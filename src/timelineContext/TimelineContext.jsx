"use client";

import { createContext, useEffect, useState } from "react";


export const KnockContext = createContext();

export default function TimelineContext({ children }) {
  const [knocks, setKnocks] = useState([]);

   useEffect(() => {
    const stored = localStorage.getItem("knocks");
    if (stored) {
      setKnocks(JSON.parse(stored));
    }
  }, []);

  const addKnock = (friend, type) => {
    const newKnock = {
      id: Date.now(),
      name: friend.name,
      type: type,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setKnocks((previousKnocks) => {
      const updated = [newKnock, ...previousKnocks];
      localStorage.setItem("knocks", JSON.stringify(updated)); // save kore rakho
      return updated;
    });
  };

  return (
    <KnockContext.Provider value={{ knocks, addKnock }}>
      {children}
    </KnockContext.Provider>
  );
}