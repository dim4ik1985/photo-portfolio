// import { Routes, Route } from 'react-router-dom';
// import { AppHeader } from './components/layout/AppHeader.tsx';
import { Header } from './components/Header.tsx';
// import { Portfolio } from './pages/Portfolio.tsx';
import { AppContent } from './components/layout/AppContent.tsx';
import { PhotoSlider } from './components/PhotoSlider.tsx';
import { Contacts } from './components/Contacts.tsx';
import { AppFooter } from './components/layout/AppFooter.tsx';

export const App = () => (
  <>
    <AppContent>
      {/*<AppHeader />*/}
      <Header />
      <PhotoSlider />
      <Contacts />
      <AppFooter />

      {/*<Routes>*/}
      {/*  /!*<Route path="/photo-portfolio" element={<Header />} />*!/*/}

      {/*  <Route path="/portfolio/:id" element={<Portfolio />} />*/}

      {/*</Routes>*/}
    </AppContent>
  </>
);
