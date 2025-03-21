import { NavLink } from 'react-router-dom';

export const PortfolioNavigate = () => {
  return (
    <section className={'bg-primary-500 m-auto max-w-[90rem] px-4 py-2'}>
      <h3 className={'font-montserrat my-10 text-lg font-light text-white'}>Портфолио</h3>
      <div className={'grid grid-cols-2 items-center gap-2 md:grid-cols-[1fr_1fr_1fr]'}>
        <NavLink
          to={'/portfolio/1'}
          className={'w-fit rounded-xl border border-white px-4 py-2 text-lg text-white'}
        >
          Свадьба
        </NavLink>
        <NavLink
          to={'/portfolio/2'}
          className={'w-fit rounded-xl border border-white px-4 py-2 text-lg text-white'}
        >
          Репортаж
        </NavLink>
        <NavLink
          to={'/portfolio/3'}
          className={'w-fit rounded-xl border border-white px-4 py-2 text-lg text-white'}
        >
          Индивидуальная
        </NavLink>
      </div>
    </section>
  );
};
