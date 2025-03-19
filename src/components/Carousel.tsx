import { ReactNode, useCallback, useEffect, useState } from 'react';
import { photoSlider } from '../data/data.ts';
import { IoChevronBackOutline, IoChevronForwardSharp } from 'react-icons/io5';

export const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000
}: {
  children: ReactNode[];
  autoSlide: boolean;
  autoSlideInterval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSliderForward = useCallback(() => {
    const isEndSlide = currentIndex === photoSlider.length - 1;
    setCurrentIndex(isEndSlide ? 0 : currentIndex + 1);
  }, [currentIndex]);

  const handleSliderBack = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photoSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(handleSliderForward, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, handleSliderForward]);

  return (
    <div className={'relative flex w-full items-center justify-center'}>
      <div className={'w-[70%] overflow-hidden'}>
        <div
          className={`flex transition-transform duration-500 ease-out -translate-x-[${currentIndex * 100}%] `}
        >
          {slides}
        </div>
      </div>
      {/*Left arrow*/}
      <button
        className={
          'bg-primary-400/50 absolute top-[50%] left-0 -translate-x-0 -translate-y-0 cursor-pointer rounded-full p-1'
        }
      >
        <IoChevronBackOutline
          className={'h-4 w-4 text-white/40 md:h-6 md:w-6'}
          onClick={handleSliderBack}
        />
      </button>
      {/*Right arrow*/}
      <button
        className={
          'bg-primary-400/50 absolute top-[50%] right-0 -translate-x-0 -translate-y-0 cursor-pointer rounded-full p-1'
        }
      >
        <IoChevronForwardSharp
          className={'h-4 w-4 text-white/40 md:h-6 md:w-6'}
          onClick={handleSliderForward}
        />
      </button>
    </div>
  );
};
