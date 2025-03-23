import { ReactNode } from 'react';

export const Page = ({ children }: { children: ReactNode }) => {
  return <div className={'bg-primary-500'}>{children}</div>;
};
