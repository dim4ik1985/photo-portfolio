import { useParams } from 'react-router-dom';
import { photoSlider } from '../data/data.ts';
import { motion } from 'motion/react';

export const Portfolio = () => {
  const { id } = useParams();
  if (id === '1') {
    console.log(id);
  }
  return (
    <section className={'bg-primary-500 w-full'}>
      <div className={'px-4'}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={'text-primary-50 font-montserrat mb-5 text-lg font-thin tracking-tight'}
        >
          Portfolio
        </motion.h2>

        <ul className={'flex flex-col gap-6'}>
          {photoSlider.map((item, index) => (
            <li key={index}>
              <img src={`${item.src}`} alt={item.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
