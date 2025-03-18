import photo from '../img/photo_2025-03-18_18-06-59.jpg';

export const Home = () => {
  return (
    <section className={'bg-primary-500 flex w-full px-8 py-4'}>
      <div className={'m-auto flex max-w-[90rem] flex-col gap-y-10'}>
        <div className={'mt-10'}>
          <img src={photo} alt="photo" className={'h-40 w-40 rounded-full object-cover'} />
        </div>
        <div className={'flex flex-col gap-3 px-4'}>
          <h1 className={'text-3xl font-bold tracking-tight text-white'}>Любовь Харитонова</h1>
          <p className={'text-xs text-white md:text-base'}>
            Нижний Новгород <span className={'px-1 min-[319px]:px-2'}>|</span> Москва
            <span className={'px-1 min-[315px]:px-2'}>|</span> Мир
          </p>
          <p className={'mb-10 text-lg text-white md:text-xl'}>
            Отдаю больше фото, чем 99% фотографов
          </p>
        </div>
      </div>
    </section>
  );
};
