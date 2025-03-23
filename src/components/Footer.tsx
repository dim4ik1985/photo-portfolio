import { Contacts } from './Contacts.tsx';

export const Footer = () => {
  return (
    <footer className={'bg-primary-500 flex flex-col items-center justify-center'}>
      <Contacts />
      <p className={'text-primary-50 py-6 text-sm'}>Copyright &copy; 2025</p>
    </footer>
  );
};
