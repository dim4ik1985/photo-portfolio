import { NavItem } from './NavItem.tsx';
import { INavigateItemProps } from '../../models';

interface IDesktopMenuProps {
  navItems: INavigateItemProps[];
  handleToggleSubmenu?: (i: number) => void;
  type?: 'desktop' | 'mobile';
}

export const DesktopMenu = (props: IDesktopMenuProps) => {
  const { navItems, handleToggleSubmenu, type } = props;

  return (
    <ul className={'hidden lg:flex lg:justify-end lg:gap-x-4'}>
      {navItems.map((item: INavigateItemProps) => (
        <NavItem key={item.id} item={item} type={type} handleToggleSubmenu={handleToggleSubmenu} />
      ))}
    </ul>
  );
};
