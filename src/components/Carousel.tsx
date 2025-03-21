import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { IoChevronBackOutline, IoChevronForwardSharp } from 'react-icons/io5';

const calculateNextIndex = (index: number, imagesLength: number) => (index + 1) % imagesLength;
const calculatePrevIndex = (index: number, imagesLength: number) =>
  (index - 1 + imagesLength) % imagesLength;

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
    <div className={'relative flex w-full items-center justify-between'}>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={'hidden h-[25rem] self-center lg:block'}
        >
          <motion.img
            src={`${photoSlider[prevIndex].src}`}
            alt=""
            className={'h-full w-full object-cover'}
          />
        </motion.div>

        <div
          className={'flex h-[20rem] sm:h-[25rem] md:h-[30rem] md:w-full md:self-center lg:h-3/4'}
        >
          <motion.img
            key={currentIndex}
            initial={{ x: direction === 'next' ? 100 : -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            src={`${photoSlider[currentIndex].src}`}
            alt=""
            className={'h-full w-full object-scale-down object-center'}
          />
        </div>

        <motion.div
          key={nextIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className={'hidden h-[25rem] self-center lg:block'}
        >
          <motion.img
            src={`${photoSlider[nextIndex].src}`}
            alt=""
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
    </div>
  );
};
