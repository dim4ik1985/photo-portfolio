import { NavLink } from 'react-router-dom';

import { NavItem } from '../NavItem/NavItem.tsx';
import { navItems } from '../../data/data';
import { IoMenuOutline } from 'react-icons/io5';

export const Nav = ({ logo }: { logo: string }) => {
  return (
    <nav className={'mx-auto flex max-w-[95rem] items-center justify-between'}>
      <NavLink to={'/'}>
        <img src={logo} alt="logo" className={'w-10 md:w-10 lg:w-15'} />
      </NavLink>
      <ul className={'hidden items-center gap-5 md:flex md:gap-10'}>
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>

      <IoMenuOutline className={'h-8 w-8 cursor-pointer text-white md:hidden'} />
    </nav>
  );
};
