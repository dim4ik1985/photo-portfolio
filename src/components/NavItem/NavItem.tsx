import { NavLink } from 'react-router-dom';
import { INavItemProps } from '../../models';

export const NavItem = (props: INavItemProps) => {
  const { item } = props;

  return (
    <li className={'text-base text-white uppercase lg:text-base'}>
      <NavLink to={item.path || '#'}>{item.title}</NavLink>
    </li>
  );
};
