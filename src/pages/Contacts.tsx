import { NavLink } from 'react-router-dom';

import { FaInstagram, FaTelegramPlane, FaVk } from 'react-icons/fa';

export const Contacts = () => {
  return (
    <section
      className={
        "bg-[url('../src/img/nordwood-themes-R53t-Tg6J4c-unsplash.jpg')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div>
        <div
          className={'m-auto flex h-screen max-w-[90rem] flex-col items-center justify-center px-2'}
        >
          <h2 className={'text-primary-600 mb-16 text-5xl font-bold tracking-tight'}>Контакты</h2>

          <ul className={'flex gap-x-6'}>
            <li className={'rounded-full bg-white p-3'}>
              <NavLink to="https://vk.ru/haritonova_love">
                <FaVk className={'h-10 w-10'} />
              </NavLink>
            </li>
            <li className={'rounded-full bg-white p-3'}>
              <NavLink to="https://t.me/haritonova_photo">
                <FaTelegramPlane className={'h-10 w-10'} />
              </NavLink>
            </li>
            <li className={'rounded-full bg-white p-3'}>
              <NavLink to="https://www.instagram.com/haritonova_photo?igsh=MTNscm1iYWJhbGFxaA==">
                <FaInstagram className={'h-10 w-10'} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
