import { photoSlider } from '../data/data.ts';

import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { IoChevronBackOutline, IoChevronForwardSharp } from 'react-icons/io5';

export const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSliderForward = () => {
    const isEndSlide = currentIndex === photoSlider.length - 1;
    setCurrentIndex(isEndSlide ? 0 : currentIndex + 1);
  };
  const handleSliderBack = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photoSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className={'bg-primary-500 relative w-full py-4'}>
      <div className={'m-auto flex h-80 overflow-hidden px-6 py-3 md:h-200'}>
        <img
          src={`${photoSlider[currentIndex].src}`}
          alt=""
          className={'h-full w-full object-scale-down'}
        />
        {/*Left arrow*/}
        <div
          className={
            'bg-primary-400/50 absolute top-[50%] left-5 -translate-x-0 -translate-y-0 cursor-pointer rounded-full p-1'
          }
        >
          <IoChevronBackOutline className={'h-5 w-5 text-white/40'} onClick={handleSliderBack} />
        </div>
        {/*Right arrow*/}
        <div
          className={
            'bg-primary-400/50 absolute top-[50%] right-5 -translate-x-0 -translate-y-0 cursor-pointer rounded-full p-1'
          }
        >
          <IoChevronForwardSharp
            className={'h-5 w-5 text-white/40'}
            onClick={handleSliderForward}
          />
        </div>
      </div>
    </section>
  );
};
