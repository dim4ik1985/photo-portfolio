import { NavLink } from 'react-router-dom';
import { Element } from 'react-scroll';

import { BsInstagram, BsTelegram } from 'react-icons/bs';
import { SiVk } from 'react-icons/si';

export const Contacts = () => {
  return (
    <Element name={'contacts'}>
      <section className={'bg-primary-500 py-8'}>
        <div>
          <div className={'m-auto flex max-w-[90rem] flex-col items-center justify-center px-2'}>
            <h2 className={'font-montserrat mb-5 text-lg font-thin tracking-tight text-white'}>
              Контакты
            </h2>

            <ul className={'flex items-center gap-x-6'}>
              <li>
                <NavLink to="https://vk.ru/haritonova_love">
                  <SiVk className={'h-6 w-6 fill-white/80'} />
                </NavLink>
              </li>

              <li className={''}>
                <NavLink to="https://www.instagram.com/haritonova_photo?igsh=MTNscm1iYWJhbGFxaA==">
                  <BsInstagram className={'h-6 w-6 fill-white/80'} />
                </NavLink>
              </li>
              <li className={'items-center rounded-md'}>
                <NavLink to="https://t.me/haritonova_photo">
                  <BsTelegram className={'h-6 w-6 fill-white/80'} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
};
