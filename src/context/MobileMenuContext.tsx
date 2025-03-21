import { createContext, ReactNode, useState } from 'react';

interface IMobileMenuContext {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const MobileMenuContext = createContext<IMobileMenuContext>({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {}
});

const MobileMenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export { MobileMenuContext, MobileMenuContextProvider };
