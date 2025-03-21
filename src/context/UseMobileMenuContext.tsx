import { useContext } from 'react';
import { MobileMenuContext } from './MobileMenuContext.tsx';

const useMobileMenuContext = () => {
  return useContext(MobileMenuContext);
};

export default useMobileMenuContext;
