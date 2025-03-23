import { useParams } from 'react-router-dom';

import { motion } from 'motion/react';
import { PortfolioList } from '../components/Porfolio/PortfolioList.tsx';

export const Portfolio = () => {
  const { id } = useParams();

  return (
    <section className={'bg-primary-500 w-full'}>
      <div className={'m-auto max-w-[90rem] px-4'}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={'text-primary-50 font-montserrat mb-5 text-lg font-thin tracking-tight'}
        >
          Portfolio
        </motion.h2>
        <PortfolioList id={id} />
      </div>
    </section>
  );
};
