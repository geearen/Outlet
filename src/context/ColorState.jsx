import { createContext } from 'react';

const initialState = {
  color: 'red'
}

export const ColorContext = createContext(initialState);

export const ColorProvider = ({ children }) => {
  return(
    <ColorContext.Provider value={{initialState}}>
      {children}
    </ColorContext.Provider>
  )
}
