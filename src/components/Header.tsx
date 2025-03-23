import { motion } from 'motion/react';

export const Header = () => {
  return (
    <header className={'bg-primary-500 w-full'}>
      <div
        className={
          'm-auto mb-8 flex max-w-[90rem] flex-col items-start gap-2 px-6 md:px-8 md:py-12'
        }
      >
        <div className={'flex max-w-[45%] flex-col gap-3'}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeInOut' }}
            className={
              'font-raleway text-primary-50 text-3xl/[2rem] font-light tracking-tight md:text-4xl/[2.5rem] lg:text-5xl/[3rem]'
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
        className={
          'font-montserrat pb-6 text-center text-lg/loose font-thin tracking-tight text-white'
        }
      >
        Амбассадор ваших эмоций
      </motion.p>
    </header>
  );
};
