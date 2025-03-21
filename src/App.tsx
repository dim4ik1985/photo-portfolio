import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header.tsx';
import { Portfolio } from './pages/Portfolio.tsx';

import { PhotoSlider } from './components/PhotoSlider.tsx';
import { Contacts } from './components/Contacts.tsx';
import { AppFooter } from './components/layout/AppFooter.tsx';
// import { PortfolioNavigate } from './components/PortfolioNavigate.tsx';
import { Home } from './pages/Home.tsx';
import { Nav } from './components/Nav/Nav.tsx';
import { MobileMenuContextProvider } from './context/MobileMenuContext.tsx';
import { MobileMenu } from './components/MobileMenu/MobileMenu.tsx';
import { AboutMe } from './components/AboutMe.tsx';

export const App = () => (
  <MobileMenuContextProvider>
    <Nav />
    <Routes>
      <Route
        path={'/photo-portfolio'}
        element={
          <Home>
            <Header />
            <PhotoSlider />
            <AboutMe />
          </Home>
        }
      />
      <Route path="/portfolio/:id" element={<Portfolio />} />
    </Routes>
    <Contacts />
    <AppFooter />
    <MobileMenu />
  </MobileMenuContextProvider>
);
