import { Nav } from '../Nav/Nav.tsx';
import logo from '../../img/icons/I3EdTqYaQ6KEFSj2SiiGRg.svg';
export const AppHeader = () => {
  return (
    <header className={'bg-primary-200/50 fixed top-0 left-0 z-10 w-full px-4 backdrop-blur-sm'}>
      <Nav logo={logo} />
    </header>
  );
};
