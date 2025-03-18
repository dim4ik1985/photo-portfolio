import { ReactNode } from 'react';

export const AppContent = ({ children }: { children: ReactNode }) => {
  return <div className={'w-full'}>{children}</div>;
};
