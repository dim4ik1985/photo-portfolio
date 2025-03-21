import { NavItem } from '../NavItem/NavItem.tsx';
import { navItems } from '../../data/data';
import { IoIosMenu } from 'react-icons/io';
import UseMobileMenuContext from '../../context/UseMobileMenuContext.tsx';

export const Nav = () => {
  const { setIsMobileMenuOpen } = UseMobileMenuContext();
  return (
    <nav className={'bg-primary-500 flex'}>
      <div className={'m-auto w-full max-w-[90rem] px-6 pt-6'}>
        <ul className={'hidden justify-end md:gap-x-6 lg:flex'}>
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>
        <div className={'flex justify-end'}>
          <IoIosMenu
            className={'fill-primary-50 h-10 w-10 cursor-pointer stroke-1 lg:hidden'}
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>
      </div>
    </nav>
  );
};
