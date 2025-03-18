import avatar from '../img/noroot.png';
import bgAbout from '../img/thomas-ae-6Io0psUdasY-unsplash.jpg';
import { useEffect, useState } from 'react';

export const About = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`h-screen bg-gradient-to-b from-black/80 to-black/50 bg-cover bg-center bg-no-repeat bg-[url(${bgAbout})] overflow-hidden`}
    >
      {/*<div className={'absolute top-0 left-0 -z-1 h-full w-full bg-black/70 backdrop-blur-sm'} />*/}
      <div
        className={`m-auto grid h-full max-w-[90rem] items-stretch ${isPortrait ? 'grid-cols-1' : 'grid-cols-[1fr_2fr] gap-2'} px-2`}
      >
        <div
          className={`flex flex-col items-center gap-2 ${isPortrait ? 'self-center max-[380px]:pt-10' : 'self-center justify-self-center'} md:gap-5`}
        >
          <img alt="avatar" src={avatar} className={'w-30 rounded-full lg:w-50'} />
          <div className={'flex flex-col items-center gap-2 md:gap-5'}>
            <h2 className={'text-center text-2xl tracking-tight text-white md:text-left'}>
              Харитонова Любовь
            </h2>
            <p className={'text-lg tracking-tight text-white'}>Немного слов обо мне</p>
          </div>
        </div>

        <div
          className={`flex flex-col gap-3 ${isPortrait ? 'self-center px-4 text-center min-[389px]:self-start' : 'self-center justify-self-start'} `}
        >
          <p
            className={`text-base tracking-tight text-white ${isPortrait ? 'min-[389px]:text-xl' : ''}`}
          >
            Больше 6 лет я снимаю именно в жанре живой фотографии. Ваши улыбки, объятия и радость от
            момента - вдохновляет меня творить.
          </p>

          <p
            className={`text-base tracking-tight text-white ${isPortrait ? 'min-[389px]:text-xl' : ''}`}
          >
            Говорят , что со мной всегда легко, даже те, кто впервые в кадре.
          </p>

          <p
            className={`text-base tracking-tight text-white ${isPortrait ? 'min-[389px]:text-xl' : ''}`}
          >
            Приходите за эмоциями и классным времяпрепровождением. Я позабочусь чтобы вам было
            комфортно и нескучно*)
          </p>

          <p
            className={`text-base tracking-tight text-white ${isPortrait ? 'min-[389px]:text-xl' : ''}`}
          >
            И конечно же создадим классную фото-историю !
          </p>

          <p
            className={`text-base tracking-tight text-white ${isPortrait ? 'min-[389px]:text-xl' : ''}`}
          >
            P. s. про фото и ретушь не вру :)
          </p>
        </div>
      </div>
    </div>
  );
};
