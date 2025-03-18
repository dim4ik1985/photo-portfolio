import sliderPhoto from '../img/sliderPhoto/photo_2025-03-18_18-44-16.jpg';

export const PhotoSlider = () => {
  return (
    <section className={'bg-primary-500 w-full py-4'}>
      <div className={'m-auto flex h-80 px-10'}>
        <img src={sliderPhoto} alt="" className={'h-full w-full object-scale-down'} />
      </div>
    </section>
  );
};
