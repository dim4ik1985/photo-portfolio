import { motion } from 'motion/react';

export const Header = () => {
  return (
    <header className={'bg-primary-500 w-full'}>
      <div
        className={
          'm-auto mb-10 flex max-w-[90rem] flex-col items-start gap-2 px-6 md:px-8 md:py-12'
        }
      >
        <div className={'flex max-w-[45%] flex-col gap-3'}>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={
              'font-raleway text-primary-50 text-xl font-light tracking-tight md:text-2xl lg:text-4xl'
            }
          >
            Любовь Харитонова
          </motion.h1>
          <motion.p className={'font-montserrat text-primary-50 text-xs md:text-base'}>
            Нижний Новгород <span className={'px-1 min-[319px]:px-2'}>|</span> Москва
            <span className={'px-1 min-[315px]:px-2'}>|</span> Мир
          </motion.p>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={
          'font-montserrat pb-10 text-center text-lg/loose font-thin tracking-tight text-white'
        }
      >
        Амбассадор ваших эмоций
      </motion.p>
    </header>
  );
};
