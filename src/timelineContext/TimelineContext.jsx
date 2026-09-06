"use client";

import { createContext, useState } from "react";

export const KnockContext = createContext();

export default function TimelineContext({ children }) {
  const [knocks, setKnocks] = useState([]);

  const addKnock = (friend, type) => {
    const newKnock = {
      id: Date.now(),
      name: friend.name,
      type: type
    };

    setKnocks((previousKnocks) => [
      ...previousKnocks,
      newKnock
    ]);
  };

  return (
    <KnockContext.Provider value={{ knocks, addKnock }}>
      {children}
    </KnockContext.Provider>
  );
}