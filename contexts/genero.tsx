import React, { createContext, useState, ReactNode, useContext } from "react";

type GeneroContextType = {
  genero: string;
  setGenero: (value: string) => void;
};

type GeneroProviderProps = {
  children: ReactNode;
};

export const GeneroContext = createContext<GeneroContextType>({
  genero: "",
  setGenero: () => {},
});

export function GeneroProvider({ children }: GeneroProviderProps) {
  const [genero, setGenero] = useState("");

  return (
    <GeneroContext.Provider value={{ genero, setGenero }}>
      {children}
    </GeneroContext.Provider>
  );
}

export function useGenero() {
  return useContext(GeneroContext);
}