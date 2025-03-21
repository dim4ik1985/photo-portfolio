import { photoSlider } from '../data/data.ts';
import { Carousel } from './Carousel.tsx';

export const PhotoSlider = () => {
  return (
    <section className={'bg-primary-500 relative w-full'}>
      <div className={'m-auto max-w-[90rem] px-4 py-8 md:h-1/2'}>
        <Carousel autoSlide={false} autoSlideInterval={1000} photoSlider={photoSlider} />
      </div>
    </section>
  );
};
