import { photoSlider } from '../data/data.ts';
import { v4 as uuidv4 } from 'uuid';

import { Carousel } from './Carousel.tsx';

export const PhotoSlider = () => {
  return (
    <section className={'bg-primary-500 relative w-full'}>
      <div
        className={
          'm-auto flex h-[70%] max-w-[90rem] items-center justify-center overflow-hidden px-4 py-2 md:h-full'
        }
      >
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {photoSlider.map((photo) => (
            <img
              key={uuidv4()}
              src={`${photo.src}`}
              alt={photo.alt}
              className={'h-full w-full shrink-0 grow-0'}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
