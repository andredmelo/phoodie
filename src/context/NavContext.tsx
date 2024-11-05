import React, { createContext, useContext, useState } from 'react';

interface NavContextType {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
  currentSection: number;
  setCurrentSection: (index: number) => void;
  changeSection: (index: number) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const changeSection = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <NavContext.Provider value={{ navOpen, setNavOpen, currentSection, setCurrentSection, changeSection }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNavContext must be used within a NavProvider');
  }
  return context;
};