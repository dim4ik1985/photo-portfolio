import { createContext, ReactNode, useState } from 'react';

interface ISubMenuContext {
  isSubMenuOpen: number | null;
  setIsSubMenuOpen: (value: number | null) => void;
}

const SubMenuContext = createContext<ISubMenuContext>({
  isSubMenuOpen: null,
  setIsSubMenuOpen: () => {}
});

const SubMenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<number | null>(null);

  return (
    <SubMenuContext.Provider value={{ isSubMenuOpen, setIsSubMenuOpen }}>
      {children}
    </SubMenuContext.Provider>
  );
};

export { SubMenuContext, SubMenuContextProvider };
