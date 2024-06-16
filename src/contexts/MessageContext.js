import React, { createContext, useState } from 'react';

export const SuccessMessageContext = createContext();

export const SuccessMessageProvider = ({ children }) => {
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <SuccessMessageContext.Provider value={{ successMessage, setSuccessMessage }}>
      {children}
    </SuccessMessageContext.Provider>
  );
};