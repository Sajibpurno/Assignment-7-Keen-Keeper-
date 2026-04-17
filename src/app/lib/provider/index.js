'use client';
import InteractionContext from '@/context/InteractionContext';
import React from 'react';

const Provider = ({ children }) => {
    return <InteractionContext>

        {children}
    </InteractionContext>
       
};

export default Provider;