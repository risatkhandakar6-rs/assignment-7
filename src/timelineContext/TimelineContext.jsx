"use client";

import { createContext, useState } from "react";

export const KnockContext = createContext();

export default function TimelineContext({ children }) {
  const [knocks, setKnocks] = useState([]);

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

    setKnocks((previousKnocks) => [
      newKnock,
      ...previousKnocks,
    ]);
  };

  return (
    <KnockContext.Provider value={{ knocks, addKnock }}>
      {children}
    </KnockContext.Provider>
  );
}