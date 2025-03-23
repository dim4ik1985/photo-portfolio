import { motion } from 'motion/react';

import { IoIosMenu } from 'react-icons/io';
import UseMobileMenuContext from '../../context/UseMobileMenuContext.tsx';
import { DesktopMenu } from './DesktopMenu.tsx';
import { MobileMenu } from './MobileMenu.tsx';

import { navItems } from '../../data/data.ts';
import UseSubMenuContext from '../../context/UseSubMenuContext.tsx';

export const Nav = () => {
  const { setIsMobileMenuOpen } = UseMobileMenuContext();
  const { isSubMenuOpen, setIsSubMenuOpen } = UseSubMenuContext();

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    setIsSubMenuOpen(null);
  };

  const handleToggleSubmenu = (i: number) => {
    setIsSubMenuOpen?.(isSubMenuOpen === i ? null : i);
  };

  return (
    <nav className={'bg-primary-500 flex'}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
        className={'m-auto w-full max-w-[90rem] px-6 pt-6'}
      >
        {/*Desktop menu*/}
        <DesktopMenu
          navItems={navItems}
          handleToggleSubmenu={handleToggleSubmenu}
          type={'desktop'}
        />

        {/*Mobile menu*/}
        <div className={'flex justify-end'}>
          <IoIosMenu
            className={'fill-primary-50 h-8 w-8 stroke-1 lg:hidden'}
            onClick={() => setIsMobileMenuOpen(true)}
          />
          <MobileMenu
            navItems={navItems}
            handleCloseMenu={handleCloseMenu}
            handleToggleSubmenu={handleToggleSubmenu}
            type={'mobile'}
          />
        </div>
      </motion.div>
    </nav>
  );
};
