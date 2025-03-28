import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { IoChevronBackOutline, IoChevronForwardSharp } from 'react-icons/io5';

const calculateNextIndex = (index: number, imagesLength: number) => (index + 1) % imagesLength;
const calculatePrevIndex = (index: number, imagesLength: number) =>
  (index - 1 + imagesLength) % imagesLength;

const variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0
  }
};

export const Carousel = ({
  autoSlide = false,
  autoSlideInterval = 2000,
  photoSlider
}: {
  autoSlide: boolean;
  autoSlideInterval?: number;
  photoSlider: { src: URL; alt: string }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(photoSlider.length - 1);
  const [nextIndex, setNextIndex] = useState(1);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const handleIndexChange = useCallback(
    (direction: 'next' | 'prev') => {
      const newIndex =
        direction === 'next'
          ? calculateNextIndex(currentIndex, photoSlider.length)
          : calculatePrevIndex(currentIndex, photoSlider.length);
      setCurrentIndex(newIndex);
      setPrevIndex(
        direction === 'next' ? currentIndex : calculatePrevIndex(newIndex, photoSlider.length)
      );
      setNextIndex(
        direction === 'next' ? calculateNextIndex(newIndex, photoSlider.length) : currentIndex
      );
      setDirection(direction);
    },
    [currentIndex, photoSlider.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => handleIndexChange('next'), autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, handleIndexChange]);

  return (
    <motion.div
      initial={'initial'}
      variants={variants}
      animate={'animate'}
      className={'relative flex w-full items-center justify-between'}
    >
      {/*Left arrow*/}
      <button className={'bg-primary-400/50 cursor-pointer rounded-full p-1'}>
        <IoChevronBackOutline
          className={'h-4 w-4 text-white/40 md:h-6 md:w-6'}
          onClick={() => handleIndexChange('next')}
        />
      </button>
      <div className={'grid grid-cols-1 gap-4 overflow-hidden px-4 lg:grid-cols-[1fr_2fr_1fr]'}>
        <motion.div
          key={prevIndex}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className={'hidden h-[20rem] self-center opacity-25 lg:block xl:h-[25rem]'}
        >
          <img
            src={`${photoSlider[prevIndex].src}`}
            alt="photo"
            className={'h-full w-full object-cover'}
          />
        </motion.div>

        <div
          className={
            'flex h-[20rem] overflow-hidden sm:h-[25rem] md:h-[30rem] md:w-full md:self-center lg:h-[35rem]'
          }
        >
          <motion.img
            key={currentIndex}
            variants={variants}
            initial={'initial'}
            animate={'animate'}
            drag={'x'}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={() => handleIndexChange(direction)}
            exit={'exit'}
            src={`${photoSlider[currentIndex].src}`}
            alt="photo"
            className={'h-full w-full object-contain'}
          />
        </div>

        <motion.div
          key={nextIndex}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className={'hidden h-[20rem] self-center opacity-25 lg:block xl:h-[25rem]'}
        >
          <img
            src={`${photoSlider[nextIndex].src}`}
            alt="photo"
            className={'h-full w-full object-cover'}
          />
        </motion.div>
      </div>

      {/*Right arrow*/}
      <button className={'bg-primary-400/50 cursor-pointer rounded-full p-1'}>
        <IoChevronForwardSharp
          className={'h-4 w-4 text-white/40 md:h-6 md:w-6'}
          onClick={() => handleIndexChange('prev')}
        />
      </button>
    </motion.div>
  );
};
