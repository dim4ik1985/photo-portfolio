import { useContext } from 'react';
import { SubMenuContext } from './SubMenuContext.tsx';

const useSubMenuContext = () => {
  return useContext(SubMenuContext);
};

export default useSubMenuContext;
