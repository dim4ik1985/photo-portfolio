import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { INavItemProps } from '../../models';
import UseMobileMenuContext from '../../context/UseMobileMenuContext.tsx';

export const NavItem = (props: INavItemProps) => {
  const { item } = props;
  const { setIsMobileMenuOpen } = UseMobileMenuContext();

  return (
    <li className={'text-base text-white uppercase lg:text-base'}>
      {item.path && item.path[0] === '/' ? (
        <NavLink to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
          {item.title}
        </NavLink>
      ) : (
        <Link
          to={'contacts'}
          smooth={true}
          duration={300}
          className={'cursor-pointer'}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};
