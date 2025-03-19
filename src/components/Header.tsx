export const Header = () => {
  return (
    <header className={'bg-primary-500 w-full'}>
      <div className={'m-auto grid max-w-[90rem] grid-cols-2 items-center gap-2 px-6 py-12'}>
        {/*<img*/}
        {/*  src={photo}*/}
        {/*  alt="photo"*/}
        {/*  className={'h-30 w-30 justify-self-center rounded-full object-cover'}*/}
        {/*/>*/}

        <div className={'flex flex-col gap-3'}>
          <h1 className={'font-raleway text-xl font-medium tracking-tight text-white'}>
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
          'font-montserrat pb-15 text-center text-lg/loose font-thin tracking-tight text-white'
        }
      >
        Амбассадор ваших эмоций
      </p>
    </header>
  );
};
