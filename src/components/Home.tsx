import photo from '../img/photo_2025-03-18_18-06-59.jpg';

export const Home = () => {
  return (
    <section className={'bg-primary-500 w-full px-8 py-4'}>
      <div className={'m-auto mt-10 mb-15 grid max-w-[90rem] grid-cols-2 items-center gap-5'}>
        <div className={'flex justify-center'}>
          <img src={photo} alt="photo" className={'h-30 w-30 rounded-full object-cover'} />
        </div>

        <div className={'flex flex-col gap-3 px-4'}>
          <h1 className={'font-raleway text-2xl font-medium tracking-tight text-white'}>
            Любовь Харитонова
          </h1>
          <p className={'font-montserrat text-xs text-white md:text-base'}>
            Нижний Новгород <span className={'px-1 min-[319px]:px-2'}>|</span> Москва
            <span className={'px-1 min-[315px]:px-2'}>|</span> Мир
          </p>
        </div>
      </div>
      <p
        className={
          'font-montserrat mb-10 text-center text-lg/loose font-thin tracking-tight text-white'
        }
      >
        Амбассадор ваших эмоций
      </p>
    </section>
  );
};
