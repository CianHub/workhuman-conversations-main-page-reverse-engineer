import React, { useReducer, useState } from 'react';
import { CharacterReducer, initialState } from './CharacterReducer';

export const CharacterContext = React.createContext();

const CharacterProvider = ({ children }) => {
  const context = useReducer(CharacterReducer, initialState);

  return (
    <CharacterContext.Provider value={context}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
