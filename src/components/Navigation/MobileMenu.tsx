import { motion } from 'motion/react';
import UseMobileMenuContext from '../../context/UseMobileMenuContext.tsx';

import { IoMdClose } from 'react-icons/io';
import { NavItem } from './NavItem.tsx';
import { INavigateItemProps } from '../../models';

interface IMobileMenuProps {
  navItems: INavigateItemProps[];
  handleCloseMenu: () => void;
  handleToggleSubmenu?: (i: number) => void;
  type?: 'desktop' | 'mobile';
}

export const MobileMenu = (props: IMobileMenuProps) => {
  const { handleCloseMenu, handleToggleSubmenu, navItems, type } = props;
  const { isMobileMenuOpen } = UseMobileMenuContext();

  return (
    <motion.div
      className={
        'bg-primary-700/50 fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-start px-6 py-6 backdrop-blur-sm'
      }
      animate={isMobileMenuOpen ? 'visible' : 'hidden'}
      variants={{
        hidden: { x: 1, opacity: 0, visibility: 'hidden' },
        visible: { x: 0, opacity: 1, visibility: 'visible' }
      }}
      transition={{
        duration: 0.25
      }}
      onClick={(e) => e.target === e.currentTarget && handleCloseMenu()}
    >
      <motion.div
        className={
          "bg-primary-500 flex basis-70 flex-col gap-y-10 rounded-xl bg-[url('../src/assets/Noise.webp')] px-6 py-8"
        }
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
        variants={{
          hidden: { x: 1, opacity: 0, visibility: 'hidden' },
          visible: { x: 0, opacity: 1, visibility: 'visible' }
        }}
        transition={{
          duration: 0.25,
          ease: 'easeInOut'
        }}
      >
        <button className={'self-end'}>
          <IoMdClose onClick={handleCloseMenu} className={'h-6 w-6 cursor-pointer fill-white'} />
        </button>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={'flex flex-col gap-y-4 self-start'}
        >
          {navItems.map((item) => (
            <NavItem
              item={item}
              key={item.id}
              handleCloseMenu={handleCloseMenu}
              handleToggleSubmenu={handleToggleSubmenu}
              type={type}
            />
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};
