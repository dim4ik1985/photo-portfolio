import { motion } from 'motion/react';
import UseMobileMenuContext from '../../context/UseMobileMenuContext';
import { navItems } from '../../data/data.ts';
import { IoMdClose } from 'react-icons/io';
import { NavItem } from '../NavItem/NavItem.tsx';

export const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = UseMobileMenuContext();

  return (
    <motion.div
      className={
        'bg-primary-700/50 fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-end px-6 py-6 pl-28 backdrop-blur-sm'
      }
      animate={isMobileMenuOpen ? 'visible' : 'hidden'}
      variants={{
        hidden: { x: 1, opacity: 0, visibility: 'hidden' },
        visible: { x: 0, opacity: 1, visibility: 'visible' }
      }}
      transition={{
        duration: 0.25
      }}
      onClick={(e) => e.target === e.currentTarget && setIsMobileMenuOpen(false)}
    >
      <motion.div
        className={
          "bg-primary-500 flex basis-80 flex-col gap-y-10 rounded-xl bg-[url('../src/assets/Noise.webp')] px-6 py-8"
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
        <button>
          <IoMdClose
            onClick={() => setIsMobileMenuOpen(false)}
            className={'h-8 w-8 cursor-pointer fill-white'}
          />
        </button>
        <ul className={'flex flex-col gap-y-4 self-end'}>
          {navItems.map((item) => (
            <NavItem item={item} key={item.id} />
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
