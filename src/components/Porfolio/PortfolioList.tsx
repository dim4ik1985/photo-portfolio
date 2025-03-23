import { motion } from 'motion/react';

import { categoryPhoto } from '../../data/data.ts';

export const PortfolioList = ({ id }: { id: string | undefined }) => {
  const categoryFilter = categoryPhoto.find((item) => item.id.toString() === id);

  return (
    <div className={''}>
      <h3 className={'text-primary-50 font-montserrat mb-5 text-lg tracking-tight'}>
        {categoryFilter?.label}
      </h3>

      <div>
        <ul className={'flex flex-col gap-4'}>
          {categoryFilter?.cards.map((item) => (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ opacity: { duration: 1, ease: 'easeInOut' } }}
              className={
                'text-primary-50 font-montserrat border-primary-50 rounded-lg border-1 text-base tracking-tight sm:text-2xl'
              }
            >
              <div className={'grid grid-cols-2 items-center gap-x-4'}>
                <div className={'max-w-[60%] px-2'}>{item.description}</div>
                <div className={'bg-primary-500 justify-self-end rounded-r-lg'}>
                  <img
                    src={`${item.image}`}
                    alt="photo"
                    className={'h-full w-full rounded-r-lg object-contain'}
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/*<ul className={'columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4'}>*/}
      {/*  {photoSlider.map((item, index) => (*/}
      {/*    <motion.li*/}
      {/*      initial={{*/}
      {/*        opacity: 0,*/}
      {/*        y: 20*/}
      {/*      }}*/}
      {/*      whileInView={{ opacity: 1, y: 0 }}*/}
      {/*      viewport={{ once: false, amount: 0.2 }}*/}
      {/*      transition={{*/}
      {/*        opacity: {*/}
      {/*          duration: 0.75,*/}
      {/*          ease: 'easeInOut'*/}
      {/*        }*/}
      {/*      }}*/}
      {/*      key={index}*/}
      {/*      className={'mb-4'}*/}
      {/*    >*/}
      {/*      <img src={`${item.src}`} alt={item.alt} className={'w-full object-contain'} />*/}
      {/*    </motion.li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
};
