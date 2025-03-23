import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header.tsx';
import { Portfolio } from './pages/Portfolio.tsx';

import { PhotoSlider } from './components/PhotoSlider.tsx';
import { Page } from './components/Layout/Page.tsx';
import { Home } from './pages/Home.tsx';
import { Nav } from './components/Navigation/Nav.tsx';
import { MobileMenuContextProvider } from './context/MobileMenuContext.tsx';
import { AboutMe } from './pages/AboutMe.tsx';
import { SubMenuContextProvider } from './context/SubMenuContext.tsx';
import { Footer } from './components/Footer.tsx';

export const App = () => (
  <MobileMenuContextProvider>
    <SubMenuContextProvider>
      <Page>
        <Nav />
        <Routes>
          <Route
            path={'/photo-portfolio'}
            element={
              <Home>
                <Header />
                <PhotoSlider />
              </Home>
            }
          />
          <Route path={`photo-portfolio/about-me`} element={<AboutMe />} />
          <Route path={`photo-portfolio/portfolio/:id`} element={<Portfolio />} />
        </Routes>
        <Footer />
      </Page>
    </SubMenuContextProvider>
  </MobileMenuContextProvider>
);
