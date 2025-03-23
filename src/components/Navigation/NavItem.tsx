import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';

import UseSubMenuContext from '../../context/UseSubMenuContext.tsx';

import { IoIosArrowDown } from 'react-icons/io';
import { INavigateItemProps } from '../../models';

interface INavItemProps {
  item: INavigateItemProps;
  handleCloseMenu?: () => void;
  handleToggleSubmenu?: (i: number) => void;

  type?: 'desktop' | 'mobile';
}

export const NavItem = (props: INavItemProps) => {
  const { item, handleCloseMenu, handleToggleSubmenu, type } = props;
  const { isSubMenuOpen, setIsSubMenuOpen } = UseSubMenuContext();

  return (
    <li className={'text-primary-50/70 cursor-pointer text-base uppercase lg:relative lg:text-lg'}>
      {/*Element with reference to page*/}
      {item.path && (
        <NavLink
          to={item.path}
          onClick={type === 'mobile' ? handleCloseMenu : () => setIsSubMenuOpen(null)}
          className={'hover:text-primary-50 transition duration-300 ease-in-out'}
        >
          {item.title}
        </NavLink>
      )}

      {/*Element with reference to submenu*/}
      {item.submenu && (
        <div className={`flex flex-col gap-2 lg:gap-0`}>
          <div
            className={
              'hover:text-primary-50 flex items-center gap-x-1 transition duration-300 ease-in-out'
            }
            onClick={() => handleToggleSubmenu?.(item.id)}
          >
            {item.title}
            <IoIosArrowDown
              className={`h-4 w-4 ${isSubMenuOpen === item.id ? 'rotate-180' : ''} transition-transform duration-300`}
            />
          </div>

          {/*Submenu*/}
          <motion.ul
            className={'flex flex-col gap-2 pl-4 lg:absolute lg:top-10 lg:pl-0'}
            initial={{ opacity: 0, maxHeight: 0, visibility: 'hidden' }}
            animate={
              isSubMenuOpen === item.id ? { opacity: 1, maxHeight: 100, visibility: 'visible' } : {}
            }
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {item.submenu?.map((submenuItem) => (
              <motion.li
                key={submenuItem.id}
                className={'hover:text-primary-50 transition duration-300 ease-in-out'}
              >
                <NavLink
                  to={`${submenuItem.path}/${submenuItem.id}`}
                  onClick={type === 'mobile' ? handleCloseMenu : () => setIsSubMenuOpen(null)}
                >
                  {submenuItem.title}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}

      {/*Element with reference to anchor*/}
      {item.anchor && (
        <Link
          to={item.anchor}
          onClick={type === 'mobile' ? handleCloseMenu : () => setIsSubMenuOpen(null)}
          className={'hover:text-primary-50 transition duration-300 ease-in-out'}
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};
