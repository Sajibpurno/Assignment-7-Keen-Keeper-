"use client";
import { createContext, useState } from "react";

export const contextData = createContext();

const InteractionContext = ({children}) => {
    const [interactionData, setInteractionData] = useState([]);
    const data = {
        interactionData,
        setInteractionData,
    }
    return (
        <contextData.Provider value={data}>
            {children}
        </contextData.Provider>
    );
};

export default InteractionContext;